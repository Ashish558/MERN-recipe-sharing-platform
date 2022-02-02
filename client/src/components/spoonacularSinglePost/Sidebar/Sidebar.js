import React from 'react'

import InputField from './InputField'
import Comments from './Comments/Comments'
import Closebtn from './CloseBtn'
import styled from 'styled-components'

function Sidebar({ postId, isActive }) {

    return (
        <Container className='sidebar-container' id={isActive ? 'active' : ''} >
            
            <Wrapper className='sidebar-wrapper'>
                <div className='sidebar-contents'>
                    <Title className='title'>Feedback</Title>
                    <InputField postId={postId} />
                    <Comments postId={postId} />
                </div>
                < Closebtn />
            </Wrapper>

        </Container>
    )
}

// at 600px sidebar shifts to right
// at 768px nav height increases

const Container = styled.div`
position: fixed;
top: 3.5rem;
right: 0;
width: 100%;
height: 100%;
background: white;
z-index: 100;
overflow: auto;
transform: translateX(100%);
transition: 0.6s;
transition-timing-function: cubic-bezier(1, .15, .05, .81);


@media (min-width: 600px) {
    width: 400px;
    border-left: 1px solid rgba(219, 219, 219, 0.75);
    overflow: scroll;
}

@media (min-width: 768px) {
    top: 4.40rem;
}
`

const Wrapper = styled.div`
padding: 1rem 1rem 1rem 1rem;
  position: relative;
  overflow: visible;
`

const Title = styled.h4`
font-size: 20px;
font-weight: 500;
line-height: 29px;
margin-bottom: 0.75rem;
color: #ea4c89;
`

export default Sidebar