import React from 'react'
import { useSelector } from 'react-redux'
import { IngredientsList, ListItem } from './styles'

function Ingredients() {

    const { ingredients } = useSelector(state => state.filterDetails)
    return (
        <IngredientsList className='ingredients'>
            {ingredients.map((item, i) => {
                return <ListItem key={i}> {item} </ListItem>
            })}
        </IngredientsList>
    )
}

export default Ingredients
