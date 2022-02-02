import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronLeft from '../../icons/chevron-left'
import ChevronRight from '../../icons/chevron-right'
import Pagination from './Pagination'

function Images({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const changeCurrentIndex = (index) => {
        //dont chamge img if reached end/start
        if (index === -1) return setCurrentIndex(0)
        if (index === images.length) return setCurrentIndex(images.length - 1)

        setCurrentIndex(index)

    }

    return (
        <ImageSlider className='img-slider'>

            <ImgContainer className='img-container'>

                {images.map((image, i) => {
                    return (
                        <Img key={i} src={image}
                            activeChild={currentIndex+1}
                            prevChild={currentIndex} />
                    )
                })}


                <LeftIcon Left className='prev-btn btn' onClick={() => changeCurrentIndex(currentIndex - 1)} >
                    <ChevronLeft />
                </LeftIcon>
                <RightIcon Right className='next-btn btn' onClick={() => changeCurrentIndex(currentIndex + 1)}>
                    <ChevronRight />
                </RightIcon>
            </ImgContainer>

            {images.length > 1 ? (
                <Slider className='slider'>
                    {
                        <Pagination currentIndex={currentIndex} images={images} setCurrentIndex={setCurrentIndex} />
                    }
                </Slider>
            ) :
                ''}

        </ImageSlider>

    )
}

const ImageSlider = styled.div`
height: 410px;
max-width: 700px;
margin: 0 auto;
`

const ImgContainer = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`


const Img = styled.img`
height: 335px;
width: 100%;
object-fit:cover;
object-fit: contain;

position: absolute;
top:0;

transform: translateX(100%);
opacity: 0;
transition: 0.3s;

&:nth-child(${props => props.activeChild}){
    opacity: 1;
    transform: translateX(0)
}

&:nth-child(${props => props.prevChild}){
    opacity: 0;
    transform: translateX(-100%)
}

`

const Slider = styled.div`
padding: 0.5rem 1rem;
display: flex;
justify-content: center;
align-items: center;
height: 20px;
margin-top: 10px;
`
const Icon = styled.i`
display: flex;
align-items: center;
justify-content: center;
padding: 0.2rem;
background-color: transparent;
position: absolute;
top: 50%;
transform: translateY(-50%);
opacity: 0.3;
transition: 0.2s;
&:hover {
    opacity: 0.7;
}

`
const LeftIcon = styled(Icon)`
left:0
`

const RightIcon = styled(Icon)`
right:0
`


export default Images
