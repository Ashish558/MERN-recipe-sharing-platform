import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import InputField from '../../components/inputs/InputField'

import Navbar from "../../components/Navbar/Navbar"
import { loginUser } from '../../services/auth'

const Login = () => {

	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")
	const [errorMsg, setErrorMsg] = useState("")


	const onSubmit = (e) => {
		e.preventDefault()
		const data = { username, password }

		loginUser(data, (err, data) => {
			if (err) return setErrorMsg(err.response.data)
		
			const { token, username, user_id, user_img } = data
			setErrorMsg("")
			setUserStorage(token, username, user_id, user_img)
			window.location='/posts'

		})
	}

	const setUserStorage = (token, username, user_id, user_img) => {
		localStorage.setItem("auth-token", token)
		localStorage.setItem("username", username)
		localStorage.setItem("user_id", user_id)
		localStorage.setItem("user_img", user_img)
	}

	useEffect(() => {
		//CheckIfLoggedIn()
	}, [])


	return (
		<>
			<Navbar />

			<FormContainer className="form-container">
				<Wrapper className="form-wrapper container">

					<Title className="title" >Login</Title>
					<Error className="form-error">{errorMsg}</Error>

					<Form onSubmit={onSubmit}>

						<InputField label='username' value={username} setValue={setUsername} flex='1 1 100%' />
						<InputField label='password' value={password} setValue={setPassword} flex='1 1 100%' />

						<Button className="btn submit-btn" type="submit">Login</Button>
					</Form>

					<p>
						Dont have an account?
						<RouterLink className="link" to="/register"> Signup</RouterLink>
					</p>


				</Wrapper>
			</FormContainer>

		</>
	)
}

const RouterLink = styled(Link)`
color: var(--primary-dark);

`

const Title = styled.h3`
text-align: center;
margin-bottom: 2rem;
font-size: 1.75rem;
font-weight: lighter;
`

const FormContainer = styled.div`
padding: 0;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
min-height: calc(100vh - 2.75rem);
`;


const Wrapper = styled.div`
padding: 2rem 1rem;
width: 100%;
max-width: 560px;
margin-left: auto;
margin-right: auto;
`

const Error = styled.p`
text-align: center;
padding: 0 1rem 1rem 1rem;
color: var(--error);
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Button = styled.button`
background: var(--primary);
border: 0;
outline: none;
padding: 0.4rem 0.6rem;
border-radius: 0.2rem;
font-family: Poppins;
transition: 0.2s;
margin-bottom: 1rem;

&:hover{
	background: var(--primary-dark);
	box-shadow: 0 0 0px #000;
	color: white;
}
`

export default Login