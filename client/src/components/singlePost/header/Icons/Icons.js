import React from 'react'
import styled from 'styled-components'
import FavouriteBtn from './FavouriteBtn'
import Heartbtn from './HeartBtn'
import CommentsBtn from './CommentsBtn'

function Icons({ postedBy, _id }) {

    return (
        <Iconslist className='icons-container'>
            <ImgContainer className='img-container'>
              <Img src={postedBy.profileImageSrc} alt='profile image' />
            </ImgContainer>
            <Heartbtn _id={_id} />
            <FavouriteBtn postId={_id} />
            <CommentsBtn _id={_id} />
        </Iconslist>
    )
}

const Iconslist = styled.ul`
  display: flex;
  align-items: center;
  
  @media (min-width: 768px) {
    position: fixed;
    top: 10.5rem;
    right: 1.5rem;
    z-index: 100;
    flex-direction: column;
    width: 40px;
    
  }
`

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; 
`


const ImgContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-bottom: 0.5rem;
  }
`
export default Icons
