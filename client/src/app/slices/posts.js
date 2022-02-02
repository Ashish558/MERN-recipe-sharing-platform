

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   posts: []
}

const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePosts: (state, {payload}) => {
            state.posts = payload
        },
        addToPosts: (state, {payload}) => {
            state.posts.push(...payload)
        },
    }
})

export const { updatePosts, addToPosts } = posts.actions
export default posts.reducer
