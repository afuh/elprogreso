import { graphql } from 'gatsby'

// https://www.gatsbyjs.org/packages/gatsby-image
export const MarkdownFragment = graphql`
  fragment MarkdownFragment on MarkdownRemark {
    html
    frontmatter {
      title
    }
  }
`
