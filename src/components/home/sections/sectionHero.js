import React from 'react'
import PropTypes from 'prop-types'
import GatsbtImg from 'gatsby-image'

import { Container, Wrapper } from '../../../utils/UI'

const Hero = ({ content }) => (
  <Container>
    <Wrapper>
      <GatsbtImg
        style={{ maxWidth: 800 }}
        alt='El Progreso'
        fluid={content.logo.fluid}
      />
    </Wrapper>
  </Container>
)

Hero.propTypes = {
  content: PropTypes.shape({
    logo: PropTypes.object,
    backgroundImage: PropTypes.object,
    contact: PropTypes.object
  }).isRequired
}

export default Hero
