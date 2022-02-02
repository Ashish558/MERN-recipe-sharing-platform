import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'
import Header from '../components/spoonacularSinglePost/header/Header'
import Images from '../components/spoonacularSinglePost/image-slider/Images'
import Contents from '../components/spoonacularSinglePost/Contents'

import SearchedRecipes from '../components/searchedRecipes/searchedRecipes'
import { Container, SinglepostContents, Wrapper } from './SinglePost'
import { searchPostById } from '../services/posts/searchPosts'
import { withRouter } from '../routes/withRouter'

function SingleSpoonacularRecipe(props) {
    const postId = props.params.id
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)
    const { isCommentsOn } = useSelector(state => state.comments)

    useEffect(() => {
        setLoading(true)

        searchPostById(postId, (err, res) => {
            if (err) return console.log(err)
            setRecipe(res.data)
            setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId])

    if(loading){
        return <h4>Loading</h4>
    }
    const {title, image, extendedIngredients: ingredients, instructions, id } = recipe
   
    return (
        <Container className='single-post'>
            <NavLoggedIn />

            <SinglepostContents className='single-post-contents'>
                <Wrapper isCommentsOn={isCommentsOn ? true : false}>
                    <Header title={title} id={id} />
                    <Images images={[image]} />
                    <Contents ingredients={ingredients} instructions={instructions} />
                </Wrapper>
                {/* <Sidebar postId={_id} isActive={isCommentsOn ? true : false} /> */}
            </SinglepostContents>
            <SearchedRecipes title={title} isSpoonacular={true} spoonacularPostId={id} />
        </Container>
    )
}


export default withRouter(SingleSpoonacularRecipe)
