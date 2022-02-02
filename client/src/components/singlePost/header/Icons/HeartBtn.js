import React, { useEffect, useState } from 'react'

import Heart from '../../../icons/heart'
import { getPostLikes, addLikeToPost, removeLikeFromPost } from '../../../../services/posts/posts'
import { Button } from './styles'
import Loading from './Loading'

function Heartbtn({ _id }) {

    const [likes, setLikes] = useState([])
    const [loading, setLoading] = useState(false)

    const addLike = () => {
        setLoading(true)
        addLikeToPost(_id, (err, data) => {
            setLikes([...likes, (localStorage.getItem('user_id'))])
            setLoading(false)
        })
    }

    const removeLike = () => {
        setLoading(true)
        removeLikeFromPost(_id, (err, data) => {
            const tempLikes = likes.filter(item => item !== (localStorage.getItem('user_id')))
            setLikes(tempLikes)
            setLoading(false)
        })
    }

    useEffect(() => {
        getPostLikes(_id, (err, data) => {
            setLikes(data)
        })
    }, [_id])

    if (likes.includes(localStorage.getItem('user_id'))) {
        return (
            <Button onClick={removeLike} data-before='Liked' isLoading={loading}>
                <Heart stroke='black' fill='rgb(58, 58, 58)' />
                {loading ? <Loading /> : '' }
            </Button>)
    }
    return (
        <Button onClick={addLike} data-before='Like' isLoading={loading}>
            <Heart stroke='black' fill='transparent' />
            {loading ? <Loading /> : '' }
        </Button>
    )
}



export default Heartbtn
