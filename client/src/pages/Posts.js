import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { getPosts, useGetPostsQuery } from '../services/posts/posts'
import NavLoggedIn from '../components/Navbar/NavbarLoggedIn'

import Post from '../components/posts/post/post'
import Filter from '../components/posts/Filter/Filter'

import { updatePosts, addToPosts } from '../app/slices/posts'
import { useDispatch, useSelector } from 'react-redux'

//updatePosts for initial posts received & addToPosts for adding another 12 posts

function Posts() {
    const postsRef = useRef(null)
    const { data, isLoading, isSuccess } = useGetPostsQuery()
    // const [isLoading, setIsLoading] = useState(initialState)
    const posts = useSelector(state => state.posts.posts)

    const filterDetails = useSelector(state => state.filterDetails)
    const dispatch = useDispatch()

    const setPosts = () => {
        dispatch(updatePosts(data))
    }

    useEffect(() => {
        const { ingredients, title } = filterDetails
        if (ingredients.length === 0 && title === '') setPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const handleScroll = async (e) => {
        checkIfpostsEnded(postsRef,handleScroll, () => {
            const data = { postsToSkip: posts.length }
            getPosts(data, (err, res) => {
                if (err) return console.log(err)
                if (res.data.length === 0) return window.removeEventListener('scroll', handleScroll)
                dispatch(addToPosts(res.data))
            })

        })
    }

    //check if scroll to end
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      
    }, [posts])   // eslint-disable-line react-hooks/exhaustive-deps

    if(posts === undefined) return <></>
  
    return (
        <PostsContainer className='posts-container'>
            <NavLoggedIn removeBorder={true} />
            {/* <Title>Search Recipes</Title> */}
            <Filter setPosts={setPosts} />
            {isLoading && 'Loading...'}

            {isSuccess && posts.length >= 1 ?
                (
                    <PostsList className='posts' id='posts' ref={postsRef}>
                        {posts.map(post => {
                            return <Post key={post._id} {...post} />
                        })}
                    </PostsList>
                ) : (
                    <PostsList>
                        <Err> Posts not found </Err>

                    </PostsList>
                )
            }
        </PostsContainer>
    )
}

export const checkIfpostsEnded = async (postsRef,handleScroll, cb) => {
    if (postsRef.current) {
        const postsElement = document.getElementById('posts')
        if (postsElement.scrollHeight - window.innerHeight <= window.pageYOffset) {
            const posY = window.scrollY
            window.removeEventListener('scroll', handleScroll)
            cb()
            setTimeout(() => {
                window.scrollTo(0, posY)
            }, 200)
        }

    }
}


const Err = styled.p`
text-transform: capitalize;
margin-top: 1rem;
`

const PostsContainer = styled.div`
margin-top: 3.65rem;
background: rgb(238, 238, 238);
background: none;
min-height: 100vh;

@media (min-width: 768px) {
    margin-top: 4.4rem;
}

`

export const PostsList = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;


@media (min-width: 600px) {
   padding: 0 0.5rem
}

@media (min-width: 900px) {
    padding: 0 0.5rem
}
`


export default Posts
