
import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, Nav, LogoLink, List, NavLink } from './styles';

const Navbar = () => {
    const location = useLocation()

    return (
        <Nav>
            <LogoLink to="/">
                <Logo>Rec</Logo>
            </LogoLink>
            <NavLists>
                <ListItem isActive={(location.pathname === '/register') ? true : false}>
                    <NavLink
                        to="/register"
                        isActive={(location.pathname === '/register') ? true : false}>Register</NavLink>
                </ListItem>
                <ListItem isActive={(location.pathname === '/login') ? true : false}>
                    <NavLink
                        to="/login"
                        isActive={(location.pathname === '/login') ? true : false}>Login</NavLink>
                </ListItem>
            </NavLists>
        </Nav>

    )
}

const NavLists = styled(List)`
margin-right: 0.5rem;
`


const ListItem = styled.li`
padding: 0.5rem 0;
position: relative;
list-style: none;

&::before {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    left: 0.25rem;
    height: 1.5px;
    width: 50%;
    transform: scaleX(0);
    background: #5c9257;
    border-radius: 30px;
    transition: 0.4s;
    transform-origin: left;
    transform: ${props => props.isActive ? 'scaleX(1)' : 'scaleX(0)'};
}

&:hover::before{
    transform: scaleX(1);
}


`


export default Navbar