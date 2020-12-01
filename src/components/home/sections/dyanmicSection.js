import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section as St, Wrapper, Header, Gallery } from '../../../utils/UI'
import { fontSize } from '../../../utils/style'
import { generateId } from '../../../utils/helpers'

const formatGallery = (gallery) =>
  gallery.reduce(
    (acc, ph) => [
      ...acc,
      {
        fluid: ph.fluid,
        caption: ph.title,
        alt: ph.title,
        src: ph.fluid.src,
        width: ph.file.details.image.width / 100,
        height: ph.file.details.image.height / 110,
      },
    ],
    [],
  )

const Section = styled(St)`
  margin-bottom: 60px;
`

const Text = styled.p`
  line-height: 2.7rem;
  margin: 30px 0;
  text-align: justify;
  font-style: italic;
  font-weight: 700;

  ${fontSize(2)}
`

const DynamicSection = ({ content: { gallery, name, text, secondText } }) => (
  <Section id={generateId(name)}>
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

DynamicSection.propTypes = {
  content: PropTypes.shape({
    gallery: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.object,
    secondText: PropTypes.object,
  }),
}

export default DynamicSection
