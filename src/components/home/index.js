import React from 'react'
import PropTypes from 'prop-types'

import { Productos, Historia, Tradicion, Contact } from './sections'

const Home = ({ data: { content } }) => {
  const [historia, productos, tradicion] = content.sections

  return (
    <>
      <Historia content={historia} />
      <Productos content={productos} />
      <Tradicion content={tradicion} />
      <Contact content={content.contact} />
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home
