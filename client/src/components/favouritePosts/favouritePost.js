
import React from 'react'
import { SinglePost } from '../posts/post/styles'
import Postbody from '../posts/post/postBody'
import Posthead from '../posts/post/postHead'

function FavouritePost({ _id, title, images, postedBy, likes }) {
    return (
        <SinglePost className='single-recipe'>
            <Postbody _id={_id} image={images[0]} title={title} type={'type'} />
            <Posthead postedBy={postedBy} likes={likes.length} />
        </SinglePost>
    )
}


export default FavouritePost
