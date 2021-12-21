import styled, { ThemeProvider } from 'styled-components'
import { useAppSelector } from '../hooks/rtk'
import { Footer } from './Footer'
import { Header } from './Header'
import { CSSReset } from './styles'

const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  background: ${props => props.theme.secondaryColor};
  
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  margin: 0;
  min-height: 65vh;

  color: ${props => props.theme.secondaryColor};
  background: ${props => props.theme.primaryColor};
`

type PropsType = {
  children: React.ReactNode
}

function Layout({ children }: PropsType) {
  const { theme } = useAppSelector((state) => state.UI)

  return (
    <>
      <CSSReset />
      <ThemeProvider theme={theme}>
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

export default Layout
