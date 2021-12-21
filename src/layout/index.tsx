import styled from 'styled-components'
import { CSSReset } from './styles'

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const HeaderWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-color: black;
  color: white;
`

const Body = styled.div`
  margin: 0;
  min-height: 60vh;
`

const FooterWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-color: black;
  color: white;
`

type PropsType = {
  children: React.ReactNode
}

function Layout({ children }: PropsType) {
  return (
    <>
      <CSSReset />
      <Wrapper>
        <Header />
        <Body>
          {children}
        </Body>
        <Footer />
      </Wrapper>
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
