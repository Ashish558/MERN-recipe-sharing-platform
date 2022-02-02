import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Postbody({_id, image, title, type, isSpoonacularRecipe }) {

    return (
        <Body className='body'>
            <ImgLink to={isSpoonacularRecipe ? `/post/spoonacular/${_id}` :`/post/${_id}`}>
                <Img src={image} />
            </ImgLink>
            <Overlay className='overlay'>
                <OverlayContents className='overlay-contents'>
                    <RecipeTitle className='title'> {title} </RecipeTitle>
                </OverlayContents>
            </Overlay>
          
        </Body>
    )
}


const Overlay = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 60px;
background: rgba(31, 31, 31, 0.26);
background: linear-gradient(to top, rgba(27, 27, 27, 0.644), transparent);
border-radius: 0.4rem;
color: #f3f8ff;

transform: translateY(10px);
transition: 0.3s;

z-index: 50;
opacity: 0;
`

const Body = styled.div`
position: relative;
overflow: hidden;
border-radius: 0.4rem;

&:hover ${Overlay}{
    transform: translateY(0);
    opacity: 1;
}
`

const OverlayContents = styled.div`
padding:0 0.5rem;
z-inndex: 50;
`

const RecipeTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 1.1px;
`

const ImgLink = styled(Link)`
display: flex;
align-items: center;
overflow:hidden;
height: 250px;
position: relative;
z-index: 20;
background: linear-gradient(130deg,#ffffff,#ddd9e9);
background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
background-image: linear-gradient(to right, #ff6e7f, #bfe9ff);

border-radius: 0.4rem;
`
const Img = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;
`


export default Postbody
