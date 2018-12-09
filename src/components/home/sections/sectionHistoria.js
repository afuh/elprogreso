import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper, Header } from '../../../utils/UI'

const Historia = ({ content: { name } }) => (
  <>
    <Section
      style={{ padding: 0 }}
      id='historia'
    >
      <Header title={name} />
      <Wrapper>
      </Wrapper>
    </Section>
  </>
)

Historia.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Historia
