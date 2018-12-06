import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../utils/seo'

const Page = ({ data: { page }, location }) => (
  <Layout location={location}>
    <SEO
      title={page.frontmatter.title}
      description={page.excerpt}
      pathname={location.pathname}
    />
    <>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Page

export const pageQuery = graphql`
  query PAGE_TEMPLATE_QUERY ($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
