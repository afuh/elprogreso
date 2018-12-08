import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import styled, { ThemeProvider, css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import BurgerMenu from './burgerMenu'

import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'

const Container = styled.div.attrs({
  id: "outer-container"
})`
  #burger {
    display: none;
  }

  ${media.phone(css`
    #header {
      display: none;
    }

    #burger {
      display: block;
    }

    #page-wrap {
      margin: 0 auto;
    }

  `)}
`

const Main = styled.main.attrs({
  id: "page-wrap"
})`
  margin: ${({ theme }) => theme.position.navHeight} auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ social: { links } }) => (
      <>
        <GlobalStyle />
        <SEO />
        <ThemeProvider theme={theme}>
          <Container>
            <Header/>
            <BurgerMenu/>
            <Main>
              {children}
            </Main>
            <Footer social={links} />
          </Container>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default ({ children }) => (
  <Location>
    {({ location }) => (
      <Layout location={location}>
        {children}
      </Layout>
    )}
  </Location>
)

const query = graphql`
  query LAYOUT_QUERY {
    social: contentfulSocialLinks {
      links {
        name
        url
      }
    }
  }
`
