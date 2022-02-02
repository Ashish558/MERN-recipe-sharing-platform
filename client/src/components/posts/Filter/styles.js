import styled from "styled-components"


export const Container = styled.div`
padding: 0 0.3rem;
margin-bottom: 1rem;
`


export const FormContainer = styled.div`
  display: ${props => props.display};
  padding: 0 1rem;
  @media (min-width: 768px){
      padding: 0 1.75rem;
  }
`

export const BtnContainer = styled.div`
display: flex;
justify-content: flex-end;
padding: 0.45rem;
border-bottom: 1px solid rgba(201, 201, 201, 0.473);
border-top: 1px solid rgba(201, 201, 201, 0.473);
margin-bottom: 1rem;
`
export const Button = styled.button`
border: 0;
outline: none;
padding: 0.45rem 0.75rem;
background: #f3f3f4;
border-radius: 0.4rem;
font-size: 15px;
transition: 0.2s;
&:hover {
    background: #e9e9e9;
}
`

export const Form = styled.form`
 

`
export const FormControl = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 0.75rem;

`

export const Label = styled.label`
margin-bottom: 0.4rem;
display: flex;
justify-content: space-between;
`

export const ClearBtn = styled.span`
display: inline-block;
font-size: 15px;
color: #ef7474;
cursor: pointer;
`


export const IngredientsList = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
white-space: pre-wrap;
white-space: pre-wrap;
white-space: -moz-pre-wrap;
white-space: -pre-wrap;
white-space: -o-pre-wrap;
word-wrap: break-word;
margin-bottom: 0.3rem;
`

export const ListItem =styled.p`
padding: 0.15rem 0.3rem;
font-size: 14px;
background: #06d6a0d9;
color: white;

border-radius: 0.25rem;
white-space: pre;
overflow-wrap: anywhere;
margin-bottom: 0.3rem;
margin-right: 0.3rem;
`

// Filter form styles 