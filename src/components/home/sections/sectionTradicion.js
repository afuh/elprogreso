import React from 'react'
import PropTypes from 'prop-types'

import { Container, Wrapper } from '../../../utils/UI'

const Tradicion = ({ content: { name } }) => (
  <Container>
    <Wrapper>
      <h2>{name}</h2>
    </Wrapper>
  </Container>
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
