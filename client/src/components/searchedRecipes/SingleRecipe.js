import React from 'react'
import { SinglePost } from '../posts/post/styles'
import Postbody from '../posts/post/postBody'

function SingleRecipe({id, title, image, isCommentsOn}) {
    return (
      <SinglePost isCommentsOn={isCommentsOn} className='single-recipe'>
          <Postbody _id={id} image={image} title={title} type={'type'} isSpoonacularRecipe={true} />
      </SinglePost>
    )
}


export default SingleRecipe
