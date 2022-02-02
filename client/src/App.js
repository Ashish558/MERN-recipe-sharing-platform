import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from "./pages/Home"
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import Singlepost from './pages/SinglePost';
import SearchRecipes from './pages/SearchRecipes';
import Favourites from './pages/Favourites';
import EditProfile from './pages/EditProfile';
import SingleSpoonacularRecipe from './pages/SingleSpoonacularRecipe';

///redux
import { verifyAuth } from './services/verifyAuth';
import { updateAuth } from './app/slices/auth';


const App = () => {
   const [isLoading, setIsLoading] = useState(true)
   const dispatch = useDispatch()
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

   useEffect(() => {
      verifyAuth((err, res) => {
         if (!res) {
            dispatch(updateAuth(false))
            setIsLoading(false)
            return
         }
         dispatch(updateAuth(true))
         setIsLoading(false)
      })
   }, [dispatch])

   if (isLoading) return <div></div>

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/posts'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <Posts />
                  </RequireAuth>
               }
            />
            <Route path='/posts/search'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <SearchRecipes />
                  </RequireAuth>
               }
            />
            <Route path='/posts/create'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <CreatePost />
                  </RequireAuth>
               }
            />


            <Route path='/post/:id'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <Singlepost />
                  </RequireAuth>
               }
            />
            <Route path='/posts/search'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <SearchRecipes />
                  </RequireAuth>
               }
            />
            <Route path='/posts/favourites'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <Favourites />
                  </RequireAuth>
               }
            />
            <Route path='/post/spoonacular/:id'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <SingleSpoonacularRecipe />
                  </RequireAuth>
               }
            />
            <Route path='/profile/edit'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <EditProfile />
                  </RequireAuth>
               }
            />
            <Route path='/posts/search'
               element={
                  <RequireAuth isAuthenticated={isAuthenticated}>
                     <SearchRecipes />
                  </RequireAuth>
               }
            />
         </Routes>
      </BrowserRouter>
   )
}


function RequireAuth({ children, isAuthenticated }) {
   return isAuthenticated ? children : <Navigate to='/login' />;
}

// function ProtectedRoute({ component: Component, ...restOfProps }) {

//    return (
//       <Route
//          {...restOfProps}
//          render={(props) =>
//             isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//          }
//       />
//    );
// }

export default App
