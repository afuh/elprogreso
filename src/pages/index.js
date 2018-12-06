import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout>
    <Home data={data} />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY {
    landing: markdownRemark(fileAbsolutePath: { regex: "/landing/" }) {
      ...MarkdownFragment
    }
  }
`
