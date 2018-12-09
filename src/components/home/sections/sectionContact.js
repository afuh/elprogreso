import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper } from '../../../utils/UI'
import Map from '../map'
import ContactForm from '../contactForm'

const Contact = ({ content: { info } }) => (
  <Section>
    <Wrapper>
      <div style={{ width: "100%", height: 400 }}>
        <Map latlng={[info.location.lat, info.location.lon]} />
      </div>
      <ContactForm />
    </Wrapper>
  </Section>
)

Contact.propTypes = {
  content: PropTypes.shape({
    info: PropTypes.object,
    text: PropTypes.object
  }).isRequired
}

export default Contact
