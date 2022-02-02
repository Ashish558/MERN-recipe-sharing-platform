import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar"

import InputField from '../../components/inputs/InputField'
import { registerUser } from '../../services/auth';

const Register = () => {

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errorMsg, setErrorMsg] = useState("")

	const onSubmit = (e) => {
		e.preventDefault()
		const data = {
			firstName, lastName, username, password
		}

		registerUser(data, (err, data) => {
			if (err) return setErrorMsg(err.response.data)
			setErrorMsg("")
			window.location='/login'
		})

	}

	return (
		<>
			<Navbar />

			<FormContainer className="form-container">
				<Wrapper className="form-wrapper">
					<Title className="title" >Register</Title>
					<Error className="form-error">{errorMsg}</Error>

					<Form onSubmit={onSubmit}>
						<InputField label='first name' value={firstName} setValue={setFirstName} mr='0.5rem' />
						<InputField label='last name' value={lastName} setValue={setLastName} />
						<InputField label='username' value={username} setValue={setUsername} flex='1 1 100%' />
						<InputField label='password' value={password} setValue={setPassword} flex='1 1 100%' />
						<Button className="btn submit-btn" type="submit">Register</Button>
					</Form>
					<p>
						Already have an account?
						<RouterLink className="link" to="/login"> Login</RouterLink>
					</p>
				</Wrapper>
			</FormContainer>

		</>
	)
}

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


const RouterLink = styled(Link)`
color: var(--primary-dark);

`
export default Register