import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { Section as St, Wrapper, Header, BackgroundImage } from '../../../utils/UI'

const Section = styled(St)`
  padding: 0;
  width: 100%;
`

const Tradicion = ({ content }) => console.log(content)||(
  <Section>
    <Header title={content.name} />
    <Wrapper>
      <BackgroundImage
        image={content.backgroundImage}
      />
      <div style={{ color: "white" }}>
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
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
