import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper } from '../../../utils/UI'

const Tradicion = ({ content: { name } }) => (
  <Section>
    <Wrapper>
      <h2>{name}</h2>
    </Wrapper>
  </Section>
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
