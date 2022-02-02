
import React from 'react'
import styled from 'styled-components'

const InputField = ({ label, value, setValue}) => {

    return (
        <InputContainer className='input-cntainer'>
            <Label htmlFor={value}>{label}</Label>
            <Input type="text"
                id={value}
                name={value}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </InputContainer>

    )
}

const InputContainer = styled.div`
margin-bottom: 1rem;
display: flex;
flex-direction: column;
align-content: stretch;
flex: 1 1 100%;

`

const Label = styled.label`
display: inline-block;
margin-bottom: 0.3rem;
width: 83px;
font-size: 15px;
`

const Input = styled.input`
border: 0;
outline: none;
height: 1.7rem;
padding: 0.5rem;
border: 1px solid rgb(189, 189, 189);
background: transparent;
flex: 1 1 100%;
  &:focus{
    box-shadow: 0px 0 4px rgba(65, 65, 65, 0.25);
  }
`

export default InputField
