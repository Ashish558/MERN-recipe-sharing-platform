import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { usersApi } from "../services/users";
import { postsApi } from "../services/posts/posts";
import { SinglePostApi } from "../services/posts/SinglePost";

import favouriteRecipesReducer from "./slices/favouriteRecipes";
import commentsReducer from "./slices/comments";
import filterDetailsReducer from "./slices/filterDetails";
import postsReducer from './slices/posts'
import searchedRecipesReducer from './slices/searchedRecipes'
import authReducer from './slices/auth'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [SinglePostApi.reducerPath]: SinglePostApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        favouriteRecipes: favouriteRecipesReducer,
        comments: commentsReducer,
        filterDetails: filterDetailsReducer,
        posts: postsReducer,
        searchedRecipes: searchedRecipesReducer,
        auth: authReducer,
    },
//    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
    devTools: true
})

setupListeners(store.dispatch)