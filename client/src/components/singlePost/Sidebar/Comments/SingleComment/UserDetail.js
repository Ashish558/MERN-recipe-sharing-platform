import React from 'react'
import styled from 'styled-components'

function UserDetail({commentedBy}) {
    const { username, profileImageSrc} = commentedBy
    return (
      <User className='user-detail'>
          <Image className='img-container'>
              <Img src={profileImageSrc} />
          </Image>
          <Username className='username'> {username} </Username>
      </User>
    )
}

const User = styled.div`
display: flex;
align-items: center;
`

const Image = styled.div`
margin-right: 0.5rem;
`

const Img = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`

const Username = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 29px;
color: #0d0c22;
}
`

export default UserDetail
