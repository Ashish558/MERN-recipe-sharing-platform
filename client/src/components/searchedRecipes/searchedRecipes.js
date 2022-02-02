import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import SingleRecipe from './SingleRecipe'
import { useSelector } from 'react-redux'
import { searchPostsByTitle, searchSimilarRecipes, getImagesOfRecipes } from '../../services/posts/searchPosts'
import { PostsList } from '../../pages/Posts'

function SearchedRecipes({ title, isSpoonacular, spoonacularPostId }) {

    const [similarRecipes, setSimilarRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { isCommentsOn } = useSelector(state => state.comments)

    useEffect(() => {
        setIsLoading(true)
        if (title || spoonacularPostId) {
            if (isSpoonacular) {
                searchSimilarRecipes(spoonacularPostId, (err, res) => {
                    const ids = res.data.map(item => item.id)
                    getImagesOfRecipes(ids, (err, res) => {
                        if (err) return console.log(err)
                        setSimilarRecipes(res.data)
                    })
                    setIsLoading(false)
                })
            } else {
                searchPostsByTitle(title, (err, res) => {
                    setIsLoading(false)
                    if(res){
                        setSimilarRecipes(res.data.results)
                    }
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    if (isLoading) {
        return <div>Loading</div>
    }


    return (
        <Container className='suggestedRecipes' isCommentsOn={isCommentsOn ? true : false}>
            <Header>
                <h4>Similar receipes</h4>
            </Header>

            {similarRecipes.length >= 1 ?
                (
                    <List >
                        {similarRecipes.map(item => {
                            return <SingleRecipe isCommentsOn={isCommentsOn} key={item.id} {...item} />
                        })}
                    </List>

                ) : (
                    <Header>Not found</Header>
                )

            }

        </Container>
    )
}


const Container = styled.div`
 margin-top: 1rem;
 padding: 0 0;
 margin: 1rem 0 0 0.5rem;
@media (min-width: 900px) {
    margin-right:${props => props.isCommentsOn ? '400px' : '0'};
    padding: 1rem 1rem;
    transition-delay: ${props => props.isCommentsOn ? '0.2s' : '0.3s'};
}
`


const Header = styled.div`

 max-width: 700px;
 margin:0 auto 1.5rem auto;
 padding-left: 1rem;
`

const List = styled(PostsList)`
padding: 0;
transition: 0.2s;

`
export default SearchedRecipes
