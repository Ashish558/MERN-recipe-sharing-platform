import React from 'react'
import styled from 'styled-components'
import Icons from './Icons/Icons'

function Header({ title, postedBy, _id }) {
   
   return (
      <Container className='header'>
         <ImageContainer className='img-container'>
            <Wrapper className='wrapper'>
               <Img src={postedBy.profileImageSrc} alt='profile image' />
            </Wrapper>
            <div className='content' >
               <Title> {title} </Title>
               <p> {postedBy.username} </p>
            </div>
         </ImageContainer>
         <Icons postedBy={postedBy} _id={_id} />
      </Container>
   )
}

export const Title = styled.h2`
   font-family: Comforta;
   text-transform: capitalize;
   color: #202020;
   font-size: 1.2rem;
   margin-bottom: 0.4rem
`

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  padding: 0.5rem 0.75rem 0.5rem 0;
`

export const ImageContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.5rem;
`

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; 
`

export default Header
