import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-right: 10px;
  padding: .5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  background-color: ${props => (props.primary && "#E4E5B8")};
  color: ${props => (props.primary ? "#696969" : "#566344")};
  
  &:hover {
    background-color: ${props => (props.primary ? "#f3f5c1" : "white")};
  }
  `
  
  // OR 
  // ${({ primary }) => 
  // primary && 
  // css`
  // background-color: ##E4E5B8;
  // color: #696969
  // &:hover {
  //     background-color: #f3f5c1;
  // }}

const Button = ({ primary, children }) => {
  return(
    <StyledButton primary={primary}>{children}</StyledButton>
  )
}

export default Button