import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { withRouter } from '../routes/withRouter'
import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'
import { useGetSinglePostQuery } from '../services/posts/SinglePost'

import Header from '../components/singlePost/header/Header'
import Images from '../components/singlePost/image-slider/Images'
import Contents from '../components/singlePost/Contents'
import Sidebar from '../components/singlePost/Sidebar/Sidebar'

import SearchedRecipes from '../components/searchedRecipes/searchedRecipes'

function Singlepost(props) {
    const { data, isLoading, isSuccess, isError } = useGetSinglePostQuery(props.params.id)
    const { isCommentsOn } = useSelector(state => state.comments)
    
    if (isLoading) {
        return <p>Loading</p>
    }
    if (isError) {
        return <p>Error fetching the post</p>
    }
   


    if (isSuccess && data) {
        //  const { _id, title, type, postedBy, images, createdAt, ingredients, steps } = data
        const { _id, title, postedBy, images, ingredients, steps } = data

        return (
            <Container className='single-post'>
                <NavLoggedIn />

                <SinglepostContents className='single-post-contents'>
                    <Wrapper isCommentsOn={isCommentsOn ? true : false}>
                        {/* <Title>
                            <Text className='line'>
                                {title}
                            </Text>
                        </Title> */}
                        <Header title={title} postedBy={postedBy} _id={_id} />

                        <Images images={images} />
                        <Contents ingredients={ingredients} steps={steps} />

                    </Wrapper>
                    <Sidebar postId={_id} isActive={isCommentsOn ? true : false} />

                </SinglepostContents>
                <SearchedRecipes title={title} />
            </Container>
        )
    }

}


export const Container = styled.div`
   margin-top: 3.8rem;
   padding: 0 0 0 0;
   position: relative;
   background: #fff;
   z-index:100;

     
  @media (min-width: 768px) {
    margin-top: 4.5rem;
  }
`

export const SinglepostContents = styled.div`
   
`

export const Wrapper = styled.div`
   padding: 0.5rem;
   transition: 0.3s;
   transition-delay: 0.4s;
   @media (min-width: 900px) {
      margin-right:${props => props.isCommentsOn ? '400px' : '0'};
      padding: 1rem 1rem;
      transition-delay: ${props => props.isCommentsOn ? '0.2s' : '0.3s'};
  }
   @media (min-width: 768px) {
      padding: 1rem 1rem;
  }
`

export const Title = styled.h2`
   text-align: center;
   margin-bottom: 1.25rem;
   font-family: Comforta;
   text-transform: capitalize;
   color: #ef476f;
`


export const Text = styled.div`
position: relative;
display: inline-block;
padding: 0 0 0.5rem 0;
 
&::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 2px;
    background: #ffd166;
}
`

export default withRouter(Singlepost)
