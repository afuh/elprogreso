import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import { Section, Wrapper as Wp } from '../utils/UI'

const Wrapper = styled(Wp)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12rem;
    margin-bottom: 2rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Section>
      <Wrapper>
        <h1>404</h1>
        <Link to="/">← Inicio</Link>
      </Wrapper>
    </Section>
  </Layout>
)

export default NotFoundPage
