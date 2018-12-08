import React from 'react'
import PropTypes from 'prop-types'


const Historia = ({ content: { name } }) => (
  <h2>{name}</h2>
)

Historia.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Historia
