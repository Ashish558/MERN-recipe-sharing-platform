import React, { useState, useEffect } from "react"
import './edit-profile.css'
import NavLoggedIn from "../components/Navbar/NavbarLoggedIn"
import InputField from "../components/Edit-Profile/inputField"

import styled from "styled-components"
// import { Header } from "../../components/Header"
// import { verifyAuth } from "../../components/verifyAuth"
import { updateProfileImage, getUserDetails, updateUserDetails } from "../services/users"

const EditProfile = () => {

   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [username, setUsername] = useState("")

   const [image, setImage] = useState()
   const [profileImageSrc, setProfileImageSrc] = useState(localStorage.getItem("user_img"))

   useEffect(() => {
      getUserInfo()
   }, [])


   const getUserInfo = async () => {
      getUserDetails((err, data) => {
         if (err) return console.log(err)
         const { username, name } = data
         setUsername(username)
         setFirstName(name.first)
         setLastName(name.last)

      })

   }

   //update image
   const onSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("image", image)
      console.log('updating ...')
      updateProfileImage(formData, (err, res) => {
         if (err) return console.log(err)

         console.log(res)
         localStorage.setItem('user_img', res.image)
         setProfileImageSrc(res.image)
      })
   }

   //update personal details of user
   const updateDetails = () => {
      const data = { username, firstName, lastName }

      updateUserDetails(data, (err, data) => {
         if (err) return console.log(err)
         localStorage.setItem('username', data.username)
         window.location = '/posts'
      })
   }

   return (

      <Container className='settings'>
         <NavLoggedIn removeBorder={true} />
         {/* <Header text='Edit Profile' linkTo='/posts' /> */}
         {/* image form */}
         <Contents className="contents">
            <ImageForm onSubmit={onSubmit} className='image-form'>
               <Label htmlFor="image" className='form-label'>Set profile photo</Label>
               <FormControl className='form-control'>
                  {
                     (profileImageSrc) ? (
                        <Image className="profile-img" src={profileImageSrc} alt="Profile" />
                     ) : ('')
                  }

                  <input type="file"
                     id="image"
                     name="image"
                     className='input-file'
                     required
                     onChange={(e) => setImage(e.target.files[0])} />
                  <Button className="btn" type="submit" >Upload</Button>
               </FormControl>
            </ImageForm>

            {/* other details */}
            <Details className='user-details-settings'>

               <Wrapper className='wrapper'>


                  <InputField label={'User Name'}
                     value={username}
                     setValue={setUsername}
                     flex='1 1 100%' />

                  <InputField label={'First Name'}
                     value={firstName}
                     setValue={setFirstName}
                     flex='1 1 100%' />

                  <InputField label={'Last Name'}
                     value={lastName}
                     setValue={setLastName}
                     flex='1 1 100%' />

               </Wrapper>

               <Button className='btn' onClick={updateDetails} >Save Changes</Button>
               {/* <p className='password-text'>
               <i className='key-icon center-v'><KeyIcon /></i>
               <span> Click here to change password</span>
            </p> */}
            </Details>
         </Contents>

      </Container>
   )
}

const Container = styled.div`
position: relative;
z-index: 10;
min-height: 100vh;
background: rgba(241, 241, 241, 0.8);


@media (min-width: 920px) {
   display: flex;
   align-items: center;
   justify-content: center;
}
`
const Contents = styled.div`
padding: 5rem 0 0 0;
@media (min-width: 920px) {
   display: flex;
}
`

const ImageForm = styled.form`
max-width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 0;
z-index: 100;
background: rgba(255, 255, 255, 1);
border-radius: 0.7rem;

@media (min-width: 650px) {
   margin-top: 1rem;
   padding: 1rem 1.2rem;
}

@media (min-width: 920px) {
   padding: 1rem 1rem;
   margin-right: 1rem;
   margin-left: 1rem;
}

`

const Label = styled.label`
margin-bottom: 1rem;
display: inline-block;
font-weight: bold;
color: var(--violet);
`

const Button = styled.button`
background: var(--violet);
color: white;
border: 0;
outline: none;
padding: 0.4rem 0.6rem;
border-radius: 0.2rem;
font-family: Poppins;
transition: 0.15s;
background: var(--violet);
color: white;
 &: hover {
  box-shadow: 0px 3px 10px rgba(136, 136, 136, 0.8);
 }
 @media (min-width: 920px) {
   margin-top: auto;
}
}
`

const FormControl = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 920px) {
   flex: 1
}
}
`

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
margin-bottom: 0.75rem;
`

const Details = styled.div`
margin-top: 1rem;
padding: 1.4rem 0.7rem;
background: rgba(255, 255, 255, 1);

max-width: 600px;
margin-left: auto;
margin-right: auto;
border-radius: 0.7rem;


@media (min-width: 650px) {
   padding: 1.2rem 1.4rem;
}

@media (min-width: 920px) {
   margin-right: 1rem;
}
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

export default EditProfile