import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1000;
font-family: Montserrat;
background: var(--primary);
height: 3rem;
background: linear-gradient(to bottom right, rgb(59, 179, 99), rgb(152, 221, 163));
background: rgb(154, 211, 155);

list-style: none;
background: #06d6a0;

background: none;

border-bottom: ${props => props.removeBorder ? '0' : "1px solid rgb(211, 210, 210)"};


@media (min-width: 768px) {
   padding: 0.65rem 0;
}


position: fixed;
top: 0;
left: 0;
width: 100%;
padding:0;
padding: 0.3rem 0;
`

export const LogoLink = styled(Link)`
text-decoration: none;
background: none;
color: #104118;
margin-left: 0.5rem;


&: hover{
    text-decoration: none;
}
`

export const Logo = styled.h4`
font-size: 1.1rem;
font-weight: lighter;
color: #104118;

font-size: 1.1rem;
font-weight: lighter;
padding: 0.5rem;
color: #ea4c89;
`


export const List = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
display: flex;
margin: 0;
`

export const NavLink = styled(Link)`
color: black;
position: relative;
transition: 0.2s ease-in-out;
padding: 0.3rem;
margin-right: 0.2rem;
color: ${props => props.isActive ? '#7cc4a2' : 'black' };
`

//POSTS NAV
export const PostsNav =styled(Nav) `
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
background: white;
font-size: 13px;

`