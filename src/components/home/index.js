import React from 'react'
import PropTypes from 'prop-types'

import { Hero, Productos, Historia, Tradicion, Galeria, Contact } from './sections'

const Home = ({ content, social }) => {
  const [historia, productos, tradicion, galeria] = content.sections

  return (
    <>
      <Hero content={content.hero} />
      <Historia content={historia} />
      <Productos content={productos} />
      <Galeria content={galeria} />
      <Tradicion content={tradicion} />
      <Contact content={content.contact} social={social}/>
    </>
  )
}

Home.propTypes = {
  content: PropTypes.object.isRequired,
  social: PropTypes.array.isRequired
}

export default Home
