

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedRecipes: [],
    filters: {
        ingredients: [],
        isFilterOn: false,
        title: ''
    }
}

const searchedRecipes = createSlice({
    name: 'searchedRecipes',
    initialState,
    reducers: {
        updateSearchedRecipes: (state, { payload }) => {
            state.searchedRecipes = payload
        },
        addIngredients: (state, { payload }) => {
            state.filters.ingredients.push(payload)
        },
        clearIngredients: (state, { payload }) => {
            state.filters.ingredients = []
        },
        updateTitle: (state, { payload }) => {
            state.filters.title = payload
        },
        toggleFilter: (state, { payload }) => {
            state.filters.isFilterOn = payload
        }
    }
})

export const {
    updateSearchedRecipes,
    addIngredients,
    clearIngredients,
    updateTitle, toggleFilter
} = searchedRecipes.actions

export default searchedRecipes.reducer
