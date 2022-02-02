import React from 'react'

import {Container, Title, Wrapper,ImageContainer, Img } from '../../singlePost/header/Header'

function Header({ title, _id }) {
   
   return (
      <Container className='header'>
         <ImageContainer className='img-container'>
            <Wrapper className='wrapper'>
               <Img src='https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg' alt='post' />
            </Wrapper>
            <div className='content' >
               <Title> {title} </Title>
               <p> Spoonacular </p>
            </div>
         </ImageContainer>
         {/* <Icons id={id} /> */}
      </Container>
   )
}


export default Header
