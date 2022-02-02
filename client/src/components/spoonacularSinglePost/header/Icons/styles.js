import styled from "styled-components"

export const Button = styled.div`
margin-left: ${props => props.marLeft || '0.5rem'};
margin-bottom: 0;
position: relative;
display: flex;
align-items: center;
padding: 0.5rem;
border: 1px solid rgb(206, 206, 206);
border-radius: 0.3rem;
margin-bottom: 0.5rem;


pointer-events: ${props => props.isLoading ? 'none' : 'all' };
cursor: ${props => props.isLoading ? 'none' : 'pointer' };

&: hover {
  background : #e3e3e359;
} 
&:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  background: rgba(75, 75, 75, 0.75);
  font-size: 0.8rem;
  color: white;
  white-space: nowrap;
  padding: 0.3rem 0.35rem;
  border-radius: 0.3rem;
  right: 100%;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;
}
&:hover::before {
  right: calc(100% + 1rem);
  opacity: 1;
}

&:after {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid rgba(75, 75, 75, 0.75);
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;
}
&:hover::after {
  right: calc(100% + 1rem - 5px);
  opacity: 1;
}

@media (min-width: 768px) {
 &::before {
  content: attr(data-before);
 }
 &::after {
  content: '';
}
margin-left: 0;
}

`