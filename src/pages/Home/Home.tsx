import { ReactElement } from 'react'
import styled from 'styled-components'

import Layout from '../../layout'

const Block = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
`

function Home(): ReactElement {
    return (
        <Layout>
            <Block ></Block>
        </Layout>
    )
}

export default Home
