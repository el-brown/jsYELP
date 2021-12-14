import styled from 'styled-components'

// Try this and see if it works:
// primary = "#333"
// secondary = 

export const MainWrapper = styled.div`
padding: 30px;
`

export const Title = styled.h1`
font-size: 4rem;
color: #fbfbfb;
`

export const Section = styled.section`
margin: 30px;
`

export const Content = styled.section`
// color: ${props => props.red ? "red" : "#dcdcdc"};
color: #dcdcdc;
font-size: 1.2rem;

`

export const RedContent = styled(Content)`
color: red;
border-color: maroon;
`