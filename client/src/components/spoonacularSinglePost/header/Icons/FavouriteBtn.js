import React, { useEffect, useState } from 'react'

import StarIcon from '../../../icons/star'
import { getFavourites, addToFavourites, removeFromFavourites } from '../../../../services/users'
import { Button } from './styles'
import Loading from './Loading'

function FavouriteBtn({ postId }) {

   const [favRecipes, setFavRecipes] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      getFavourites((err, data) => {
         setFavRecipes(data)
         setIsLoading(false)
      })
   }, [])
   
   const add = () => {
      setLoading(true)
      addToFavourites(postId, (err, data) => {
         console.log(data)
         if (err) return 
         setFavRecipes([...favRecipes, postId])
         setLoading(false)
      })
   }

   const remove = () => {
      setLoading(true)
      removeFromFavourites(postId, (err, data) => {
         if (err) return 
         const tempRecipes = favRecipes.filter(item => item !== postId)
         setFavRecipes(tempRecipes)
         setLoading(false)
      })
   }
   
   if (isLoading) return <div></div>
  
   if (favRecipes?.includes(postId)) {
      return (
         <Button marLeft='auto' data-before='In favourites' className='fav-btn btn'
            onClick={remove} >
            <StarIcon stroke='black' fill='black' />
            {loading ? <Loading /> : '' }
         </Button>
      )
   }

   return (
      <Button marLeft='auto' data-before='Add to favourites' className='fav-btn btn mmm'
         onClick={add} >
         <StarIcon stroke='black' fill='transparent' />
         {loading ? <Loading /> : '' }
      </Button>
   )

}


export default FavouriteBtn
