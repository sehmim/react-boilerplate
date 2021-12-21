import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themes } from '../util/themes'
import { CSSReset } from './styles'

const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
  
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const HeaderWrapper = styled.div`
  height: 15vh;
  width: 100%;

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`

const Body = styled.div`
  margin: 0;
  min-height: 65vh;

  color: ${props => props.theme.secondaryColor};
  background: ${props => props.theme.primaryColor};
`

const FooterWrapper = styled.div`
  height: 20vh;
  width: 100%;

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
`

type PropsType = {
  children: React.ReactNode,
  theme?: String
}

function Layout({ children, theme }: PropsType) {

  const [myTheme] = useState(theme ? theme : themes['defaultTheme'])

  return (
    <>
      <CSSReset />
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Wrapper>
      </ ThemeProvider>

    </>
  )
}

function Header() {
  return (<HeaderWrapper>Header</HeaderWrapper>)
}

function Footer() {
  return (<FooterWrapper>Footer</FooterWrapper>)
}

export default Layout
