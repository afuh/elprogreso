import { graphql } from 'gatsby'

export const HomePage = graphql`
  fragment Hero on ContentfulHero {
    logo {
      title
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
    logoMobile {
      title
      fluid(maxWidth: 500) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
    backgroundImage {
      title
      fluid(maxWidth: 2048) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
    contact {
      address {
        md: childMarkdownRemark {
          body: rawMarkdownBody
        }
      }
      phoneNumber
      email
    }
  }

  fragment Section on ContentfulSection {
    name
    text {
      md: childMarkdownRemark {
        body: rawMarkdownBody
      }
    }
    secondText {
      md: childMarkdownRemark {
        body: rawMarkdownBody
      }
    }
    gallery {
      title
      file {
        details {
          image {
            width
            height
          }
        }
      }
      fluid(maxWidth: 1024) {
        src
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
    backgroundImage{
      fluid(maxWidth: 2048) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }

  fragment ContactInfo on ContentfulFooter {
    info {
      address {
        md: childMarkdownRemark {
          body: rawMarkdownBody
        }
      }
      email
      phoneNumber
      location {
        lon
        lat
      }
    }
    name
    text {
      md: childMarkdownRemark {
        body: rawMarkdownBody
      }
    }
    social {
      links {
        name
        url
      }
    }
  }
`
