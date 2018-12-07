import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout>
    <Home
      data={{
        content: data.content,
        vignetas: {
          left: data.vignetaLeft,
          right: data.vignetaRight
        }
      }}
    />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY {
    content: contentfulPage(name: {regex:"/home/i"}) {
      hero {
        ...Hero
      }
      sections {
        ...Section
      }
      contact: sectionContact {
        ...ContactInfo
      }
    }
    vignetaLeft: contentfulAsset(title: {regex: "/vigneta left/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    vignetaRight: contentfulAsset(title: {regex: "/vigneta right/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`
