import React, { useState } from 'react'
import styled from 'styled-components'

import Title from './Title'

function Ingredients({ ingredients, setIngredients, checkIfUnique }) {

    const [isEditing, setIsEditing] = useState(false)
    const [ingredient, setIngredient] = useState('')
    const [ingredientToEdit, setIngredientToEdit] = useState('')

    const [isDeleting, setIsDeleting] = useState(false)

    const addIngredient = () => {
        if (checkIfUnique(ingredients, ingredient)) return
        if (ingredient.trim() === '') return

        if (isEditing === true) {
            const tempIngredients = ingredients.map(item => {
                if (item === ingredientToEdit) {
                    return ingredient
                }
                return item
            })
            setIsEditing(!isEditing)
            setIngredient('')
            return setIngredients(tempIngredients)
        }

        setIngredients(prev => [...prev, ingredient])
        setIngredient('')
    }

    const modify = (ingredient) => {
        if (isEditing) {
            setIngredientToEdit(ingredient)
            setIngredient(ingredient)
        } else if (isDeleting) {
            removeItem(ingredient)
        }
    }

    const removeItem = (ingredient) => {
        const tempIngregients = ingredients.filter(singleIngredient => {
            return singleIngredient !== ingredient
        })
        setIngredients(tempIngregients)
    }

    return (
        <Container>

            <Title title='Ingredients' setIsEditing={setIsEditing}
                isEditing={isEditing}
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
            />

            <IngredientsContainer className='ingredients' >
                {ingredients?.map(ingredient => {
                    return <Ingredient onClick={() => modify(ingredient)} pointerEvents={isEditing || isDeleting === true ? 'all' : 'none'} key={ingredient}> {ingredient} </Ingredient>
                })}
            </IngredientsContainer>

            <InputField className='add-ingredient'>
                <Input type='text'
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)} />
                <AddBtn type='button' onClick={addIngredient}>{isEditing ? 'Edit' : 'Add'}</AddBtn>

                {isEditing || isDeleting ? (
                    <ToolTip>Click on the ingredients to {isEditing ? 'edit' : 'delete'} </ToolTip>
                ) : ('')}
            </InputField>

        </Container>
    )
}

const Container = styled.section`
margin:0 0 2rem 0;
`

const IngredientsContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 0.5rem;
`

const Ingredient = styled.p`
padding: 0.1rem 0.2rem;
margin-right: 0.5rem;
margin-bottom: 0.3rem;

background: rgba(210, 243, 195, 0.4);
background: #effdf9;
pointer-events: ${props => props.pointerEvents || "none"}
`

const AddBtn = styled.button`
border:0;
padding:0.3rem 0.4rem;
border-radius:0.2rem;
background: #06d6a0;
color:white;
transition: 0.2s;
&:hover{
    background: #04ad80;
    color: white;
}

background:transparent;
border: 1px solid #04ad80;
color: #04ad80;
`

const InputField = styled.div`

`

const Input = styled.input` 
height: 1.3rem;
outline: none;
background: transparent;
padding: 0.2rem 0.2rem;
border-radius: 0.2rem;
transition: 0.3s;
margin:0 0.5rem 0.2rem 0;
border: 1px solid rgb(192, 192, 192);
`

const ToolTip = styled.p`
color:gray;
font-size:0.8rem;

`

export default Ingredients
