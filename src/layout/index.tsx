import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderWrapper = styled.div`
  border: 1px solid red;
  height: 100px;
  width: 100%;
`

const Body = styled.div`
  margin: 0;
  height: 100%;
`

const FooterWrapper = styled.div`
  border: 1px solid red;
  height: 100px;
  width: 100%;
`

type PropsType = {
  children: React.ReactNode
}

function Layout({ children }: PropsType) {
  return (
    <Wrapper>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </Wrapper>
  )
}

function Header() {
  return (<HeaderWrapper>Header</HeaderWrapper>)
}

function Footer() {
  return (<FooterWrapper>Footer</FooterWrapper>)
}

export default Layout
