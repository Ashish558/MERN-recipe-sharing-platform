import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { domain } from '../constants'


export const SinglePostApi = createApi({
    reducerPath: 'SinglePostApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${domain}/post`
    }),
    endpoints: (builder) => ({
        getSinglePost: builder.query({
            query: (id) => `/${id}`,
        })
    })
})

// export const SinglePostApi = createApi({
//     reducerPath: 'SinglePostApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:4000/post/'
//     }),
//     endpoints: (builder) => ({
//         getSinglePost: builder.query({
//             query: (id) => ({
//                 url: `${id}`,
//                 method: 'GET'
//             })
//         })
//     })
// })

export const { useGetSinglePostQuery } = SinglePostApi