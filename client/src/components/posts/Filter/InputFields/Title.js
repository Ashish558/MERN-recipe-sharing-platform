import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTitle } from '../../../../app/slices/filterDetails'
import { InputBox, Input, Button } from './styles'


 function TitleInputField() {
    const [title, setTitle] = useState('')
    const { title: filterTitle } = useSelector(state => state.filterDetails)
   
    useEffect(() => {
        if(filterTitle === '') return setTitle('')
       }, [filterTitle])
       
    const dispatch = useDispatch()

    const handleClick = () => {
        if(title.trim() === '') return
        dispatch(updateTitle(title))
    }
    return (
        <InputBox className='input-box'>
            <Input type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={handleClick} type='button'> Add </Button>
        </InputBox>
    )
}


export default TitleInputField
