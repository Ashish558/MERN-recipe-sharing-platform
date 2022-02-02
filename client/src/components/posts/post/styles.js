import styled from "styled-components"

const SinglePost = styled.div`
  flex: 1 1 100%;
  border-radius: 0.4rem;
  margin: 0 1rem 1rem 1rem;
  transition: 0.3s;

  @media (min-width: 600px) {
      flex: ${props => props.isCommentsOn ? '1 1 100%' : ' 0 0 calc(50% - 2rem - 2px)' };
      max-width: 350px;
  }

  @media (min-width: 1000px) {
      flex: ${props => props.isCommentsOn ? '1 1 100%' : ' 0 1 calc(33% - 2rem - 2px)' };
  }
`

export { SinglePost  }