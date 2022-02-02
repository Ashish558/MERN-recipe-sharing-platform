import styled from "styled-components";

export const Input = styled.input`
border: 0;
outline: none;
height: 28px;
background: #e9e9e97a;
border-radius: 0.3rem;
padding: 0.2rem 0.5rem;
flex: 1;
`

export const InputBox = styled.div`
display: flex;
align-items: center;
`

export const Button = styled.button`
margin-left: 1rem;
padding: 0.42rem 0.5rem;
border: 1px solid #b1b0b07a;
background: transparent;
border-radius: 0.3rem;
transition: 0.2s;

&:hover {
    border: 1px solid #e9e9e97a;
    background: #e9e9e97a;
  }
}
}`
