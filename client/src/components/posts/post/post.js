import React from 'react'
import Posthead from './postHead'
import Postbody from './postBody'
import { SinglePost } from './styles'

function Post({ _id, title, type, posted_by, images, createdAt, likes }) {

    return (
        <SinglePost className='post'>
            <Postbody _id={_id} image={images[0]} title={title} type={type} />
            <Posthead postedBy={posted_by[0]} likes={likes} />
        </SinglePost>
    )
}



export default Post
