import React from 'react'
import styled, { keyframes } from 'styled-components'

function Loading(props) {
    return (
        <Container>
            <Ring>
                <Child></Child>
                <Child></Child>
                <Child></Child>
                <Child></Child>
            </Ring>
        </Container>
    )
}
const Container = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 30;
background: rgb(171 171 171 / 37%);
width: 100%;
height: 100%;

`

const Ring = styled.div`
display: inline-block;
width: 100%;
height: 100%;

`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Child = styled.div`
box-sizing: border-box;
display: block;
position: absolute;
width: 20px;
height: 20px;
margin: 8px;
border: 2px solid #fff;
border-radius: 50%;
animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
border-color: #202020 transparent transparent transparent;

&:nth-child(1){
    animation-delay: -0.45s;
}

&:nth-child(2){
    animation-delay: -0.3s;
}

&:nth-child(3){
    animation-delay: -0.15s;
}


`

export default Loading
