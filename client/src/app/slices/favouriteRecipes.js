

import { createSlice } from "@reduxjs/toolkit";

const initialState = [ ]

const favouriteRecipesSlice = createSlice({
    name: 'favouriteRecipes',
    initialState: initialState,
    reducers: {
        update: (state, {payload}) => {
            state = payload
        }
    }
})

export const { update } = favouriteRecipesSlice.actions
export const getFavouriteRecipes = (state) => state.favouriteRecipes
export default favouriteRecipesSlice.reducer
