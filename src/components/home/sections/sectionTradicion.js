import React from 'react'
import PropTypes from 'prop-types'


const Tradicion = ({ content: { name } }) => (
  <h2>{name}</h2>
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
