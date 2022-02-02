import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../../app/slices/searchedRecipes'
import { Container, BtnContainer, Button, FormContainer } from '../../posts/Filter/styles'
import FilterForm from './FilterForm'

function Searchbar() {

    const { isFilterOn } = useSelector(state => state.searchedRecipes.filters)
    
    const dispatch = useDispatch()

    return (
       <div className='searchbar'>
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
       </div>
    )
}


export default Searchbar
