import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'

import { Section, Wrapper, Header } from '../../../utils/UI'

const Historia = ({ content }) => (
  <>
    <Section id='historia'>
      <Header title={content.name} />
      <Wrapper>
        <div>
          {content.text.md.body}
        </div>
        <div>
          {content.gallery.map(photo => (
            <GatsbyImg
              style={{ maxWidth: 300 }}
              key={photo.title}
              alt={photo.title}
              fluid={photo.fluid}
            />
          ))}
        </div>
      </Wrapper>
    </Section>
  </>
)

Historia.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Historia
