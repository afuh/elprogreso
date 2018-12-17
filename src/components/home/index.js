import React from 'react'
import PropTypes from 'prop-types'

import { Hero, Tradicion, Contact, Gallery } from './sections'

const Home = ({ content }) => {
  const [historia, productos, tradicion] = content.sections

  return (
    <>
      <Hero content={content.hero} />
      <Gallery content={historia} />
      <Gallery content={productos} />
      <Tradicion content={tradicion} />
      <Contact content={content.contact} />
    </>
  )
}

Home.propTypes = {
  content: PropTypes.object.isRequired
}

export default Home
