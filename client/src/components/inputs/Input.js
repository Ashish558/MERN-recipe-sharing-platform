import styled from "styled-components"

export const Input = styled.input`
width: ${props => props.width || "calc(100% - 0.4rem)"};
border: 0;
height: 1.75rem;
outline: none;
padding: 0.2rem 0.2rem;
border-radius: 0.2rem;
transition: 0.3s;
margin-bottom: 1rem;
border: 1px solid #d1cece;

&:focus,
&:valid {
  box-shadow: 0 0 2.5px rgb(44, 88, 42);
  border: 1px solid rgba(204, 243, 203, 1);
  background: transparent;
}
`
export const Label = styled.label`
display: inline-block;
margin-bottom: 0.3rem;
color: rgba(63, 63, 63, 0.966);
margin-bottom: ${props => props.mb || "0.3rem"};
text-transform: capitalize;
`

export const InputField = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
flex: ${props => props.flex || "1 1 47%"};
margin-bottom: 0.75rem;
margin-right: ${props => props.mr || "0"};
margin-bottom: ${props => props.mb || "0"};
`