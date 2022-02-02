import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'

import { PostsList } from './Posts'
import FavouritePost from '../components/favouritePosts/favouritePost'
import { getFavouritePosts } from '../services/users'

function Favourites(props) {
    const [favourites, setFavourites] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getFavouritePosts((err, res) => {
            if (err) console.log(err)
            setFavourites(res)
            setLoading(false)
        })

    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <Container>
            <NavLoggedIn />
            <Header>
                <h4>Favourites receipes</h4>
            </Header>
            <List>
                {
                    favourites.length >= 1 ?
                        favourites.map(favPost => {
                            return <FavouritePost key={favPost._id} {...favPost} />
                        })
                        :
                        <p>No favourites found</p>
                }
            </List>
        </Container>
    )
}

const Container = styled.div`
   margin-top: 4rem;
   padding: 1rem 0 0 0;
   position: relative;
   background: #fff;
   z-index:100;

     
  @media (min-width: 768px) {
    margin-top: 4.5rem;
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
padding-top: 1rem;
`
export default Favourites
