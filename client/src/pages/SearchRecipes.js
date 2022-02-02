import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { PostsList } from './Posts'
import { useSelector } from 'react-redux'
import { searchPosts } from '../services/posts/searchPosts'

import SingleRecipe from '../components/searchedRecipes/SingleRecipe'
import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'
import Searchbar from '../components/searchedRecipes/searchbar/searchbar'
import { checkIfpostsEnded } from './Posts'

function SearchRecipes() {

    const [spoonacularRecipes, setSpoonacularRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { isCommentsOn } = useSelector(state => state.comments)

    const postsRef = useRef(null)

    const { ingredients, title } = useSelector(state => state.searchedRecipes.filters)

    useEffect(() => {
        setIsLoading(true)
        searchPosts(ingredients, title, 0, (err, res) => {
            setIsLoading(false)
            if (err) return console.log(err)
            
            if (res) {
                setSpoonacularRecipes(res.data.results)
            }
        })
    }, [ingredients, title])
    

    const handleScroll = async (e) => {
        checkIfpostsEnded(postsRef, handleScroll, () => {
            const offset = spoonacularRecipes.length
            searchPosts(ingredients, title, offset, (err, res) => {
                if (err) return console.log(err)
                if (res.data.results.length === 0) return window.removeEventListener('scroll', handleScroll)
                setSpoonacularRecipes([...spoonacularRecipes, ...res.data.results])
            })

        })
    }
    //check if scroll to end
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [spoonacularRecipes])   // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container className='search-recipes-container' isCommentsOn={isCommentsOn ? true : false}>
            <NavLoggedIn />
            <Header>
                <h4>Search receipes</h4>
            </Header>
            <Searchbar />
            {isLoading ? <p>Loading</p> : (

                spoonacularRecipes.length >= 1 ?
                    (
                        <List id='posts' ref={postsRef}>
                            {spoonacularRecipes.map(item => {
                                return <SingleRecipe isCommentsOn={isCommentsOn} key={item.id} {...item} />
                            })}
                        </List>

                    ) : (
                        <Header>Not found</Header>
                    )
            )}


        </Container>
    )
}


const Container = styled.div`
margin-top: 3.8rem;
padding: 0 0 0 0;
position: relative;
background: #fff;
z-index:100;
padding: 1rem 0;

@media (min-width: 768px) {
    margin-top: 4.5rem;
    padding: 1rem 1rem;
}
`


const Header = styled.div`
text-align: center;
margin-bottom: 1.5rem;
font-size: 20px;
font-weight: 500;
line-height: 29px;
`

const List = styled(PostsList)`
padding: 0;
transition: 0.2s;

`
export default SearchRecipes
