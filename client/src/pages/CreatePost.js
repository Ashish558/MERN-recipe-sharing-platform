import React, { useState } from 'react'
import styled from 'styled-components'
import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'
import TitleInput from '../components/inputs/TitleInput'
import Steps from '../components/createPost/steps'
import Ingredients from '../components/createPost/Ingredients'
import axios from 'axios'

import { domain } from '../services/constants'

export default function CreatePost(props) {
   const [title, setTitle] = useState('')
   const [steps, setSteps] = useState([])
   const [ingredients, setIngredients] = useState([])
   const [images, setImages] = useState()
   const [type, setType] = useState('')

   const checkIfUnique = (array, item) => {
      if (array.includes(item)) return true
      else {
         return false
      }
   }
   const handleClick = (e) => {
      e.preventDefault()
      if (ingredients.length === 0) return
      if (steps.length === 0) return
      if (!type) return

      const data = { title, ingredients, steps, type }
      axios.post(`${domain}/post/create`, data, {
         headers: {
            "auth-token": localStorage.getItem('auth-token')
         }
      })
         .then(res => {
            updateImage(res.data._id)
         })
         .catch(err => {
            console.log(err)
         })

   }

   const updateImage = (postId) => {
      var formData = new FormData();

      for (const key of Object.keys(images)) {
         formData.append('postImages', images[key])
      }

      axios.post(`${domain}/post/${postId}/update/images`, formData, {
         headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": localStorage.getItem('auth-token')
         }
      })
         .then(res => {
            window.location = '/'
         })
         .catch(err => {
            console.log(err)
         })
   }


   return (
      <Container>
         <NavLoggedIn />
         <Title>Create Recipe</Title>
         <form onSubmit={e => handleClick(e)} className='recipe-form' encType="multipart/form-data">

            <Input title={title} setTitle={setTitle} />

            <Ingredients ingredients={ingredients} setIngredients={setIngredients} checkIfUnique={checkIfUnique} />
            <Steps steps={steps} setSteps={setSteps} checkIfUnique={checkIfUnique} />

            <Type>
               <Radio type="radio" value="Veg" id="Veg"
                  onChange={(e) => setType(e.target.value)} name="type" />
               <Label htmlFor="Veg">Veg</Label>

               <Radio type="radio" value="Non-veg" id="Non-veg"
                  onChange={(e) => setType(e.target.value)} name="type" />
               <Label htmlFor="Non-veg">Non Veg</Label>
            </Type>

            <h3>Choose Photos</h3>
            <InputFile>
               <input type='file'
                  onChange={e => setImages(e.target.files)}
                  accept='image/*'
                  name='postImages'
                  multiple />
            </InputFile>

            <SubmitBtn>Submit</SubmitBtn>
         </form>
      </Container>
   )
}

const Container = styled.div`
padding: 0.5rem 1rem;
padding-bottom: 3rem;
max-width:700px;
margin-left:auto;
margin-right:auto;
`

const Title = styled.h2`
margin:4rem 0 1rem 0;
text-align:center;
@media (min-width: 768px) {
    margin-top: 5rem;
}
`

const Input = styled(TitleInput)`
width: calc(100% - 0.4rem);
`

const Type = styled.div`
margin:1.5rem 0;
`

const Radio = styled.input`
margin:0 0.2rem;
`
const Label = styled.label`
margin-right: 1rem
`

const InputFile = styled.div`
margin-bottom:1.5rem;
`

const SubmitBtn = styled.button`
border: 0;
padding: 0.4rem 0.75rem;
background: #06d6a0;
color: white;
box-shadow: 1px 1px 4px rgb(161, 161, 161);
border-radius: 0.5rem;
transition: 0.2s;

&:hover {
    background: #04ad80;
}
`
