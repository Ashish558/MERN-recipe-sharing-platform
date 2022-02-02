import React from 'react'
import styled from 'styled-components'
import Heart from '../../icons/heart'

function Posthead({ postedBy, likes }) {

   return (
      <Head className='head'>
         <ImgContainer className='img-container'>
            <Img src={postedBy.profileImageSrc} alt='avatar' />
         </ImgContainer>
         <p> {postedBy?.username} </p>
         <PostDetails className='post-details'>
            <Heart fill='#9e9ea7' width='14px' height='14px' />
            <Likes className='likes-count'> {likes} </Likes>
         </PostDetails>
      </Head>
   )
}

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`

const ImgContainer = styled.div`
  margin-right: 1rem;
  display: flex;
`

const PostDetails = styled.div`
display: flex;
align-items: center;
margin-left: auto;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`

const Likes = styled.p`
font-size: 13px;
margin-left: 0.2rem;
color: #3d3d3d;
`

export default Posthead
