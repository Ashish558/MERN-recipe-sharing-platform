
import React from 'react'
import styled from 'styled-components'
import { Input, InputField } from './Input'

const TitleInput = ({ title, setTitle }) => {

    return (
        <InputField className='input-container' mb='1.5rem' >
            <Label mb='0.5rem' htmlFor="title">Title</Label>
            <Input type="text"
                width='calc(100% - 0.4rem)'
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

        </InputField>

    )
}



const Label = styled.h3`
font-size: 19px;
font-weight: 550;
margin-bottom: 0.35rem;
`


export default TitleInput