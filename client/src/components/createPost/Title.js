import React from 'react'
import styled from 'styled-components'

import EditIcon from '../icons/edit'
import RemoveIcon from '../icons/trash'
import FinishIcon from '../icons/finish'

export default function Title({ title, isEditing, setIsEditing, removeItem, isDeleting, setIsDeleting }) {

    const deleteItem = () => {
        setIsDeleting(!isDeleting)
        setIsEditing(false)
    }

    const editItem = () => {
        setIsEditing(!isEditing)
        if (isDeleting) {     
            setIsDeleting(false)
        }
    }


    return (
        <Title2>
            <Head> {title} </Head>
            <Buttons className='buttons'>
                <IconButton onClick={() => editItem()} type='button' classname='button-icon'>
                    {isEditing ? (
                        <Icon mr='0.5rem' active><FinishIcon /></Icon>
                    ) : (
                        <Icon mr='0.5rem' active><EditIcon /></Icon>
                    )}

                </IconButton>
                <IconButton onClick={() => deleteItem()} type='button' classname='button-icon'>
                    {isDeleting ? (
                        <Icon active><FinishIcon /></Icon>
                    ) : (
                        <Icon><RemoveIcon onClick={removeItem} /></Icon>
                    )}

                </IconButton>
            </Buttons>
        </Title2>
    )
}


const Head = styled.h3`
font-size: 19px;
font-weight: 550;
`

const Title2 = styled.div`
display:flex;
align-items:center;
margin-bottom:0.5rem;
`

const Buttons = styled.div`
margin-left:auto;
margin-right:0.5rem;

`

const Icon = styled.i`
display:flex;
align-items:center;
margin-right:${props => props.mr || "0"};

`

const IconButton = styled.button`
border:0;
background:transparent;
`
