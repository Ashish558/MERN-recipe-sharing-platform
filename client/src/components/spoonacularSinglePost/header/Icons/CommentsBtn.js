import React from 'react'
import CommentsIcon from '../../../icons/comment'
import { openComments } from '../../../../app/slices/comments'
import { useDispatch } from 'react-redux'
import { Button } from './styles'

function CommentsBtn() {

    const dispatch = useDispatch()

    return (
        <Button onClick={() => dispatch(openComments(true))} data-before='Comment' className='comment-btn btn' >
            <CommentsIcon stroke='black' fill='none' />
            <div className='text'></div>
        </Button>
    )
}

export default CommentsBtn
