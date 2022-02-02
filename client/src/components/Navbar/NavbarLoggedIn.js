
import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import SearchIcon from '../icons/search'
import StarIcon from '../icons/star';
import { PostsNav, LogoLink, Logo, List } from './styles';

const NavLoggedIn = ({ removeBorder }) => {

    const imageSrc = localStorage.getItem('user_img')
    return (
        <PostsNav removeBorder={removeBorder} className="nav posts-nav" >
            <LogoLink to="/posts">
                <Logo> Rec </Logo>
            </LogoLink>

            <List className="lists" >
                <ListItem>
                    <NavLink to="/posts/search" className='icon'>
                        <SearchIcon width='18px' height='18px' fill='#404040' />
                    </NavLink>
                </ListItem>
                <ListItem >
                    <NavLink to="/posts/favourites" className='icon'>
                        <StarIcon width='18px' fill='transparent' stroke='#404040' />
                    </NavLink>
                </ListItem>
                <ListItem>
                    <UploadBtn to="/posts/create" className='edit-icon icon'>
                        Upload
                    </UploadBtn>
                </ListItem>
                <ListItem>
                    <EditProfileLink to='/profile/edit' >
                        <Image src={imageSrc} className='image' />
                    </EditProfileLink>
                </ListItem>
            </List>
        </PostsNav>

    )
}

const ListItem = styled.li`
margin-right: 1rem;
list-style: none;
display: flex;
justify-content: center;
align-items: center;
`

const NavLink = styled(Link)`
position: relative;
display: flex;
align-items: center;
padding: 0;
color: rgb(163, 163, 163);
font-size: 1rem;
cursor: pointer;
z-index: 1000;
`


const UploadBtn = styled(NavLink)`
display: inline-block;
padding: 0.3rem 0.65rem;
background: #ea4c89;
border-radius: 0.4rem;
color: white;
transition: 0.2s;

&:hover {
    background: #f791b8;
}
`

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const EditProfileLink = styled(Link)`
display: flex;
align-items: center;
`


export default NavLoggedIn