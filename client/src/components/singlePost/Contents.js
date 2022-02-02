import React from 'react'
import styled from 'styled-components'
import AngleRight from '../icons/angleRight'

function Contents({ ingredients, steps }) {
    
    return (
        <div className='contents'>
            <Ingredients className='ingredients'>
                <Title className='title'> Ingredients </Title>
                <IngredientsList className='ingredients-list'>
                    {ingredients.map((ing, i) => {
                        return <Item1 key={i}> <Icon> <AngleRight /> </Icon> {ing} </Item1>
                    })}
                </IngredientsList>
            </Ingredients>
            <Steps className='ingredients'>
                <Title className='title'> Steps </Title>
                <List2 className='steps-list'>
                    {steps && steps.map((step, i) => {
                        return <Item2 key={i}> {step} </Item2>
                    })}
                </List2>
            </Steps>


        </div>
    )
}

const Container = styled.div`
margin-bottom: 2rem;
max-width: 700px;
margin: 0 auto;
margin-bottom: 2rem;

background: whitesmoke;
border: 1px solid #e5e5e5;
padding: 0.5rem;
border-radius: 0.5rem;
`
const Ingredients = styled(Container)`
    padding: 1rem

`

const Steps = styled(Container)`
padding: 1rem
`

//ingredient list
const IngredientsList = styled.ul`
display: flex;
flex-wrap: wrap;
`

const Item1 = styled.li`
display: flex;
align-items: center;
flex: 0 0 calc(50% - 1rem);
margin-right: 0.5rem;

@media (min-width: 600px) {
    flex: 0 0 calc(33% - 1rem);
}

`

const List2 = styled.ol`
  display: block;
  padding-left: 1.5rem;
`


const Item2 = styled.li`
  list-style: decimal;
 padding: 0.3rem;
`

const Icon = styled.i`
display: flex;
justify-content: center;
align-items: center;
`

const Title = styled.h3`
font-family: Comforta;
margin-bottom: 1rem;
  text-transform: capitalize;
  color: #ef476f;
  margin-left: 0.5rem
`

export default Contents
