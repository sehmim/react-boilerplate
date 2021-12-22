import { ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import Layout from '../../layout'

const HomeContainer = styled.div`
    text-align: center;
`

const Header = styled.h1`
    font-size: 50px;
`


function Home(): ReactElement {
    const { t } = useTranslation();

    return (
        <Layout>
            <HomeContainer>
                <Header>{t('welcome')}</Header>
            </HomeContainer>
        </Layout>
    )
}

export default Home
