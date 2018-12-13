import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section as St, Wrapper, Header } from '../../../utils/UI'
import { fontSize } from '../../../utils/style'
import { formatGallery } from '../../../utils/helpers'
import Gallery from '../gallery'

const Section = styled(St)`
  margin-bottom: 60px;
`

const Text = styled.p`
  line-height: 2.7rem;
  margin: 30px 0;
  text-align: justify;
  font-style: italic;

  ${fontSize(2)}
`

const Galeria = ({ content: { gallery, name, text, secondText } }) => (
  <Section id={name.toLowerCase().replace(" ", "-")}>
    <Header title={name} />
    <Wrapper>
      <Gallery
        photos={formatGallery(gallery)}
        firstText={text && <Text>{text.md.body}</Text>}
        secondText={secondText && <Text>{secondText.md.body}</Text>}
      />
    </Wrapper>
  </Section>
)

Galeria.propTypes = {
  content: PropTypes.shape({
    gallery: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.object,
    secondText: PropTypes.object
  })
}

export default Galeria
