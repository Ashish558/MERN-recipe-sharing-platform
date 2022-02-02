import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { domain } from './constants'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${domain}/user`
    }),
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: () => '/users'
        }),

        getUserFavourites: builder.query({
            query: () => ({
                url: '/favourites',
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('auth-token')
                }
            })
        }),

        updateUserFavourites: builder.query({
            query: (postId) => ({
                url: `/update/favourites`,
                method: 'PUT',
                headers: {
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: { postId }
            })
        })

    })
})


export const getFavourites = (cb) => {
    axios.get(`${domain}/user/favourites`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

export const getUserDetails = (cb) => {
    axios.get(`${domain}/user/get/details`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}


export const getFavouritePosts = (cb) => {
    axios.get(`${domain}/user/favourites/posts`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data.favouriteRecipes))
        .catch(err => console.log(err))
}



export const addToFavourites = (postId, cb) => {
    axios.put(`${domain}/user/add/favourites`, { postId }, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

export const removeFromFavourites = (postId, cb) => {
    axios.put(`${domain}/user/remove/favourites`, { postId }, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

// update user details
export const updateProfileImage = (formData, cb) => {

    axios.post(`${domain}/user/update/profileImage`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}

export const updateUserDetails = (data, cb) => {

    axios.put(`${domain}/user/update/details`, data, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(res => cb(null, res.data))
        .catch(err => console.log(err))
}



export const { useGetUsersQuery, useGetUserFavouritesQuery, useUpdateUserFavouritesQuery } = usersApi
