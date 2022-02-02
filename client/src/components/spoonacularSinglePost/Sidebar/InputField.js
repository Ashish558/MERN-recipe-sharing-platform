import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateComments } from '../../../app/slices/comments'
import { addComment, getPostComments } from '../../../services/posts'

function InputField({ postId }) {

    const [feedback, setFeedback] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (feedback.trim() === '') return
        addComment(postId, feedback, (err, data) => {
            if (err) return console.log(err)
            console.log(data)
            // dispatch(updateComments(data))
            getPostComments(postId, (err, data) => {
                dispatch(updateComments(data))
            })
        })
        setFeedback('')
    }

    return (
        <Form className='feedback-form' onSubmit={handleSubmit} >
            <Textarea className='textarea'
                draggable='false'
                type='text'
                placeholder='Give Feedback...'
                value={feedback}
                onChange={e => setFeedback(e.target.value)} />
            <Button className='send-btn'> send </Button>
        </Form>
    )
}

const Form = styled.form`
margin-bottom: 1.7rem;
`

const Textarea = styled.textarea`
width: calc(100% - 1rem) !important;
border: 0;
background: #f8f8f8;
outline: none;
padding: 0.5rem;
height: 5rem !important;
`

const Button = styled.button`
border: 0;
border-radius: 0.2rem;
background: #7f80f0;
padding: 0.2rem 0.6rem;
color: white;
`

export default InputField
