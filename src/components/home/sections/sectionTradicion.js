import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper, Header } from '../../../utils/UI'

const Tradicion = ({ content: { name } }) => (
  <Section>
    <Header title={name} />
    <Wrapper>
    </Wrapper>
  </Section>
)

Tradicion.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Tradicion
