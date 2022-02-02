import React, { useState } from 'react'
import styled from 'styled-components'

import Title from './Title'

function Steps({ steps, setSteps, checkIfUnique }) {

    const [step, setStep] = useState('')
    const [stepToEdit, setStepToEdit] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const [isDeleting, setIsDeleting] = useState(false)

    const addStep = () => {
        if (step.trim() === '') return
        if (checkIfUnique(steps, step)) return

        if (isEditing === true) {
            const tempSteps = steps.map(item => {
                if (item === stepToEdit) {
                    return step
                }
                return item
            })
            setIsEditing(!isEditing)
            setStep('')
            return setSteps(tempSteps)
        }

        setSteps(prev => [...prev, step])
        setStep('')
    }

    const modify = (step) => {
        if (isEditing) {
            setStepToEdit(step)
            setStep(step)
        } else if (isDeleting) {
            removeItem(step)
        }
    }

    const removeItem = (step) => {
        const tempSteps = steps.filter(singleStep => {
            return singleStep !== step
        })
        setSteps(tempSteps)
    }

    return (
        <Container>
            <Title title='Steps' setIsEditing={setIsEditing}
                isEditing={isEditing}
                removeItem={removeItem}
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
            />
            <Lists>
                {steps?.map(step => {
                    return <Item onClick={() => modify(step)} pointerEvents={isEditing || isDeleting === true ? 'all' : 'none'} key={step}> {step} </Item>
                })}
            </Lists>

            <InputField>
                <Input type='text'
                    value={step}
                    onChange={(e) => setStep(e.target.value)} />
                <AddBtn type='button' onClick={addStep}>
                    {isEditing ? 'Edit' : 'Add'}
                </AddBtn>

                {isEditing || isDeleting ? (
                    <ToolTip>Click on the steps to {isEditing ? 'edit' : 'delete'} </ToolTip>
                ) : ('')}

            </InputField>
        </Container>
    )
}


const Container = styled.section`
margin:0 0 3rem 0;
`

const Item = styled.li`
`

const InputField = styled.div`

`

const Lists = styled.ol`
padding:0 0 0 1rem;
margin-bottom: 0.5rem;

`

const AddBtn = styled.button`
border:0;
padding:0.3rem 0.4rem;
border-radius:0.2rem;
background: #06d6a0;
color:white;
transition: 0.2s;
&:hover{
    background: #04ad80;
    color: white;
}

background:transparent;
border: 1px solid #04ad80;
color: #04ad80;
`

const Input = styled.input` 
height: 1.3rem;
outline: none;
background: transparent;
padding: 0.2rem 0.2rem;
border-radius: 0.2rem;
transition: 0.3s;
margin:0 0.5rem 0.2rem 0;
border: 1px solid rgb(192, 192, 192);
width:calc(100% - 0.5rem);
`

const ToolTip = styled.p`
color:gray;
font-size:0.8rem;

`

export default Steps
