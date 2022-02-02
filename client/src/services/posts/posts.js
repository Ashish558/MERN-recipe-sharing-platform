import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { authHeader, domain } from '../constants'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${domain}/post`
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: '/',
                method: 'POST',
                body: { postsToSkip: 0 }
            })
        })
    })
})

const baseUrl = `${domain}/post`

// get all posts
export const getPosts = (postsToSkip, cb) => {

    axios.post(`${baseUrl}/`, postsToSkip , authHeader)
        .then(res => cb(null, res))
        .catch(err => console.log(err))
}

// Likes
export const getPostLikes = (postId, cb) => {

    axios.get(`${baseUrl}/${postId}/likes`, authHeader)
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}


export const addLikeToPost = (postId, cb) => {
    axios.put(`${baseUrl}/${postId}/add/like`, {}, authHeader)
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

export const removeLikeFromPost = (postId, cb) => {
    axios.put(`${baseUrl}/${postId}/remove/like`, {}, authHeader)
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

// comments

export const getPostComments = (postId, cb) => {

    axios.get(`${baseUrl}/${postId}/comments`,authHeader)
        .then(res => {
            cb(null, res.data.comments)
        })
        .catch(err => console.log(err))
}

export const addComment = (postId, comment, cb) => {
    axios.post(`${baseUrl}/${postId}/comment`, { comment }, authHeader)
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

export const { useGetPostsQuery } = postsApi