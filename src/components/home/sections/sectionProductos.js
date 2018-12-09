import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper, Header } from '../../../utils/UI'
import Gallery from '../gallery'

const Productos = ({ content: { gallery, name } }) => {
  const photos = gallery.reduce((acc, ph) => [
    ...acc,
    {
      fluid: ph.fluid,
      caption: ph.title,
      src: ph.fluid.src,
      srcSet: ph.fluid.srcSet,
      width: ph.file.details.image.width/100,
      height: ph.file.details.image.height/110
    }
  ], [])

  return (
    <Section>
      <Header title={name} />
      <Wrapper>
        <Gallery photos={photos}/>
      </Wrapper>
    </Section>
  )
}

Productos.propTypes = {
  content: PropTypes.shape({
    gallery: PropTypes.array,
    name: PropTypes.string
  }).isRequired
}

export default Productos
