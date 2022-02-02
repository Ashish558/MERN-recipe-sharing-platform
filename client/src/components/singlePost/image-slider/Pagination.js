import React from 'react'
import styled from 'styled-components'

function Pagination({ images, currentIndex, setCurrentIndex }) {

    return (
        <Images className='pagination'>
            {images.map((image, i) => {
                return (
                    <Dot active = {i === currentIndex ? true : ''}
                        key={i} className='dot'
                        onClick={() => setCurrentIndex(i)}></Dot>
                )
            })}
        </Images>
    )
}

const Images = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Dot = styled.div`
border-radius: 50%;
margin: 0 0.35rem;
transition: 0.1s;
width: ${props => props.active ? '8px' : "6px"};
 height: ${props => props.active ? '8px' : "6px"};
 background: ${props => props.active ? 'none' : " rgba(0, 0, 0, 0.75)"};
 border: ${props => props.active ? '1px solid black' : "none"};
 `
export default Pagination
