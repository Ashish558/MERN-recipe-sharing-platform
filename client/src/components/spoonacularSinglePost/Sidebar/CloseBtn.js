import React from 'react'
import styled from 'styled-components'

import ChevronRight from '../../icons/chevron-right'
import { closeComments } from '../../../app/slices/comments'
import { useDispatch } from 'react-redux'

function Closebtn(props) {
    const dispatch = useDispatch()
    return (
        <CloseBtn onClick={() => dispatch(closeComments())} className='close-btn'>
            <ChevronRight width='13px' />
        </CloseBtn>
    )
}

const CloseBtn = styled.div`
width: 15px;
position: absolute;
top: 1rem;
right: 1rem;
display: flex;
align-items: center;
padding: 0.2rem;
cursor: pointer;
`

export default Closebtn
