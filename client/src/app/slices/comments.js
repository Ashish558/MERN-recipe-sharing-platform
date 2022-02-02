

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isCommentsOn: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        updateComments: (state, {payload}) => {
            state.comments = payload
        },
        openComments: (state, {payload}) => {
            state.isCommentsOn = true
        },
        closeComments: (state, {payload}) =>{
            state.isCommentsOn = false
        }
    }
})

export const { openComments, closeComments, updateComments } = commentsSlice.actions
export const getIsCommentsOpen = (state) => state.isCommentsOn
export default commentsSlice.reducer
