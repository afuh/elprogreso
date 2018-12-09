import React from 'react'
import PropTypes from 'prop-types'

import { Section, Wrapper, Header, Contact as Info } from '../../../utils/UI'
import Map from '../map'
import ContactForm from '../contactForm'

const Contact = ({ content }) => (
  <Section style={{ background: '#8b0000' }}>
    <Header title={content.name} />
    <Wrapper>
      <Info
        contact={content.info}
      />
      <div style={{ width: "100%", height: 400 }}>
        <Map latlng={[content.info.location.lat, content.info.location.lon]} />
      </div>
      <div>
        {content.text.md.body}
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
