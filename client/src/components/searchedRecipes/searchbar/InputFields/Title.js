import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTitle } from '../../../../app/slices/searchedRecipes'

import { InputBox, Input, Button } from '../../../posts/Filter/InputFields/styles'

 function TitleInputField(props) {
    const [title, setTitle] = useState('')
    const { title: filterTitle } = useSelector(state => state.searchedRecipes.filters)
    
    const dispatch = useDispatch()

    const handleClick = () => {
        if(title.trim() === '') return
        dispatch(updateTitle(title))
    }

    useEffect(() => {
     if(filterTitle === '') return setTitle('')
    }, [filterTitle])
    
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
