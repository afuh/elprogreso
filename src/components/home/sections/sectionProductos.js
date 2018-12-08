import React from 'react'
import PropTypes from 'prop-types'

import Gallery from '../gallery'

const Productos = ({ content: { gallery, name } }) => {
  const photos = gallery.reduce((acc, ph) => [
    ...acc,
    {
      fluid: ph.fluid,
      src: ph.fluid.src,
      srcSet: ph.fluid.srcSet,
      width: ph.file.details.image.width/100,
      height: ph.file.details.image.height/110
    }
  ], [])

  return (
    <>
      <h2>{name}</h2>
      <Gallery photos={photos}/>
    </>
  )
}

Productos.propTypes = {
  content: PropTypes.shape({
    gallery: PropTypes.array,
    name: PropTypes.string
  }).isRequired
}

export default Productos
