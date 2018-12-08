import React from 'react'
import PropTypes from 'prop-types'

import Map from '../map'
import ContactForm from '../contactForm'

const Contact = ({ content: { info } }) => (
  <>
    <div style={{ width: 900, height: 300 }}>
      <Map latlng={[info.location.lat, info.location.lon]} />
    </div>
    <ContactForm />
  </>
)

Contact.propTypes = {
  content: PropTypes.shape({
    info: PropTypes.object,
    text: PropTypes.object
  }).isRequired
}

export default Contact
