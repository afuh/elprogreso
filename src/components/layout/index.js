import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import styled, { ThemeProvider, css } from 'styled-components'

import Footer from './footer'
import Navigation from './navigation'

import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'

const Main = styled.main.attrs({
  id: "page-wrap"
})`
  margin: ${({ theme }) => theme.position.navHeight} auto;

  ${media.phone(css`
    margin: 0 auto;
  `)}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ social: { links } }) => (
      <>
        <GlobalStyle />
        <SEO />
        <ThemeProvider theme={theme}>
          <div id="outer-container">
            <Navigation />
            <Main>
              {children}
            </Main>
            <Footer social={links} />
          </div>
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
