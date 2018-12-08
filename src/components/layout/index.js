import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle } from '../../utils/style'

const Main = styled.main`
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ social: { links } }) => (
      <>
        <GlobalStyle />
        <SEO />
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <Main>
              {children}
            </Main>
            <Footer social={links} />
          </>
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
