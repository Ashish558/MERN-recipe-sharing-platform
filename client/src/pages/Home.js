import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) return window.location='/posts'
     return window.location='/login'

  }, [])

  return (
    <div>
      Home

    </div>

  )
}

export default Home
