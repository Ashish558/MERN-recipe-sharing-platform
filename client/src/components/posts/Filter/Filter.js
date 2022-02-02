import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterForm from './FilterForm'
import { toggleFilter } from '../../../app/slices/filterDetails'
import { updatePosts } from '../../../app/slices/posts'

import { getFilteredPosts } from '../../../services/posts/filteredPosts'

import { Container, BtnContainer, Button, FormContainer } from './styles'

function Filter({ setPosts }) {
    const { isFilterOn } = useSelector(state => state.filterDetails)
    const filterDetails = useSelector(state => state.filterDetails)

    const dispatch = useDispatch()

    useEffect(() => {
        const { ingredients, title } = filterDetails
        // if no filter is applied set posts to originally fetched posts
        if (ingredients.length === 0 && title.trim() === '') return setPosts()

        getFilteredPosts(filterDetails, (err, res) => {
            if (err) console.log(err)
            dispatch(updatePosts(res.data))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterDetails])


    return (
        <Container className='filter-container'>
            <BtnContainer className='filter-btn-container'>
                <Button onClick={() => dispatch(toggleFilter(!isFilterOn))}>
                    Filters
                </Button>
            </BtnContainer>
            <FormContainer className='filter-form-container' display={isFilterOn ? 'block' : 'none'} >
                <FilterForm />
            </FormContainer>
        </Container>
    )
}


export default Filter
