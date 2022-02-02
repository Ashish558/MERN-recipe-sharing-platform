import React from 'react'
import styled from 'styled-components'
import UserDetail from './UserDetail'

function SingleComment({ commentedBy, body, createdAt }) {

    return (
        <Comment className='single-comment'>
            <UserDetail commentedBy={commentedBy} />
            <CommentBody className='comment-body'>
                <p> {body} </p>
            </CommentBody>
        </Comment>
    )
}

const Comment = styled.div`
margin-bottom: 1.7rem;
border-radius: 0.5rem;
`

const CommentBody = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 20px;
margin-bottom: 2px;
color: #3d3d4e;
word-wrap: break-word;
margin-left: 40px;
`

export default SingleComment
