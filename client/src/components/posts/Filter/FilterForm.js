import React from 'react'
import { useDispatch } from 'react-redux'
import { clearIngredients, updateTitle } from '../../../app/slices/filterDetails'
import Ingredients from './Ingredients'
import Ingredientinputfield from './InputFields/Ingredient'
import TitleInputField from './InputFields/Title'
import { Form, FormControl, Label, ClearBtn } from './styles'

function FilterForm() {
    const handleSubmit = (e)=> {
        e.preventDefault()
    }
    const dispatch = useDispatch()

    return (
        <Form className='filter-form' onSubmit={handleSubmit} >
            <FormControl className='ingredient-input-field form-control'>
                <Label> Ingredients <ClearBtn onClick={()=> dispatch(clearIngredients()) } >clear</ClearBtn> </Label>
                <Ingredients />
               <Ingredientinputfield />
            </FormControl>
            <FormControl className='title-input-field form-control'>
                <Label> Title <ClearBtn onClick={
                    ()=> dispatch(updateTitle('')) } >clear</ClearBtn></Label>
               <TitleInputField />
            </FormControl>
        </Form>
    )
}

export default FilterForm
