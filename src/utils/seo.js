import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const SEO = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        meta: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          siteUrl
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image ? image :`${siteUrl}${defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`
      }

      return (
        <Helmet
          htmlAttributes={{ lang: "en" }}
          title={seo.title}
        >
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          <meta property="og:locale" content='en'/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={seo.title} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="400" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:url" content={seo.url} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
        </Helmet>
      ) }}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null
}

export default SEO

const query = graphql`
  query SEO_QUERY {
    site {
      meta: siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`
