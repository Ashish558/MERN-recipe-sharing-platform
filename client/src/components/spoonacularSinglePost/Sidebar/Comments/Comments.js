import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostComments } from '../../../../services/posts'
import SingleComment from './SingleComment/SingleComment'
import { updateComments } from '../../../../app/slices/comments'

function Comments({ postId }) {

    const { comments } = useSelector(state => state.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        getPostComments(postId, (err, data) => {
            dispatch(updateComments(data))
        })

    }, [])

    if (comments.length === 0) {
        return <div></div>
    }

    return (
        <div className='comments'>
            {comments?.map(comment => {
                return <SingleComment key={comment._id} {...comment} />
            })}
        </div>
    )
}


export default Comments
