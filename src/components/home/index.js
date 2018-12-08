import React from 'react'
import PropTypes from 'prop-types'

import Map from '../map'

const Home = ({ data }) => (
  <Map
    latlng={[data.content.contact.info.location.lat, data.content.contact.info.location.lon]}
    city={"Buenos Aires"}
  />
)

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home
