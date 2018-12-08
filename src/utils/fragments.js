import { graphql } from 'gatsby'

export const HomePage = graphql`
  fragment Hero on ContentfulHero {
    logo {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    backgroundImage {
      fluid(maxWidth: 4096) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    contact {
      address {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      phoneNumber
      email
    }
  }

  fragment Section on ContentfulSection {
    name
    text {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    gallery {
      fluid(maxWidth: 2000) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    backgroundImage{
      fluid(maxWidth: 4096) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }

  fragment ContactInfo on ContentfulFooter {
    info {
      email
      phoneNumber
      location {
        lon
        lat
      }
    }
    text {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
  }
`
