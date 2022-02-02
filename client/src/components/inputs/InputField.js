
import React from 'react'
import { Input, InputField, Label } from './Input'

const InputField2 = ({ label, value, setValue, mr, flex }) => {

    return (
        <InputField className='input-container'
            flex={flex || false}
            mr={mr || false}
        >
            <Label htmlFor={value}>{label}</Label>
            <Input type="text"
                id={value}
                name={value}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </InputField>

    )
}

export default InputField2
