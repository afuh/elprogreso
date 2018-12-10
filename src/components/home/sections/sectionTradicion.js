import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { Section as St, Wrapper as Wr, BackgroundImage } from '../../../utils/UI'
import { fontSize } from '../../../utils/style'

const Section = styled(St)`
  padding: 0;
  width: 100%;
  border: 20px solid white;
  border-radius: 40px;
  overflow: hidden;
`

const Wrapper = styled(Wr)`
  padding: 8% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Text = styled.h2`
  color: ${({ theme }) => theme.white};
  font-family: 'playfair display', serif;
  font-style: italic;

  ${fontSize(5.0)};
`

const Tradicion = ({ content }) => (
  <Section>
    <Wrapper>
      <BackgroundImage
        image={content.backgroundImage}
      />
      <Fade>
        <Text>“{content.text.md.body}”</Text>
      </Fade>
      {content.gallery.map(photo => (
        <GatsbyImg
          style={{ width: "100%", maxWidth: 500 }}
          key={photo.title}
          alt={photo.title}
          fluid={photo.fluid}
        />
      ))}
    </Wrapper>
  </Section>
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
