import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addIngredients } from '../../../../app/slices/searchedRecipes'
import {  InputBox, Input, Button } from '../../../posts/Filter/InputFields/styles'

function Ingredientinputfield() {
    const [ingredient, setIngredient] = useState('')
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        if (ingredient.trim() === '') return
        setIngredient('')
        dispatch(addIngredients(ingredient))
    }
    return (
        <InputBox className='input-box'>
            <Input type="text"
                id="ingredient"
                name="ingredient"
                required
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
            />
            <Button onClick={handleClick} type='button'> Add </Button>
        </InputBox>
    )
}



export default Ingredientinputfield
