

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ingredients: [],
    isFilterOn: false,
    title: ''
}

const filterDetailsSlice = createSlice({
    name: 'filterDetails',
    initialState,
    reducers: {
        addIngredients: (state, {payload}) => {
            state.ingredients.push(payload)
        },
        clearIngredients: (state, {payload}) => {
            state.ingredients = []
        },
        updateTitle: (state, {payload}) => {
            state.title = payload
        },
        toggleFilter: (state, {payload}) =>{
            state.isFilterOn = payload
        }
    }
})

export const { addIngredients, clearIngredients,updateTitle, toggleFilter } = filterDetailsSlice.actions
export default filterDetailsSlice.reducer
