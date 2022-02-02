import React from 'react'
import { useSelector } from 'react-redux'
import { IngredientsList, ListItem } from '../../posts/Filter/styles'

function Ingredients() {

    const { ingredients } = useSelector(state => state.searchedRecipes.filters)
    return (
        <IngredientsList className='ingredients'>
            {ingredients.map((item, i) => {
                return <ListItem key={i}> {item} </ListItem>
            })}
        </IngredientsList>
    )
}

export default Ingredients
