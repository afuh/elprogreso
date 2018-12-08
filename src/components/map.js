import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

const providers = {
  osm: (x, y, z) => {
    const s = String.fromCharCode(97 + (x + y + z) % 3)
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
  },
  wikimedia: (x, y, z) => {
    const retina = typeof window !== 'undefined' && window.devicePixelRatio >= 2 ? '@2x' : ''
    return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${retina}.png`
  },
  stamen: (x, y, z) => {
    const retina = typeof window !== 'undefined' && window.devicePixelRatio >= 2 ? '@2x' : ''
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${retina}.jpg`
  },
  cartodb: (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`
}

export default class Maps extends PureComponent {
  onMarkerClick(evt) {
    console.log(evt.payload)
  }

  render() {
    const { city, latlng, width, height } = this.props
    return (
      <div>
        <Map
          width={width}
          height={height}
          defaultCenter={latlng}
          defaultZoom={15}
          provider={providers.wikimedia}
        >
          <Marker
            key={`marker_${city}`}
            anchor={latlng}
            payload={city}
            onClick={this.onMarkerClick}
          />
        </Map>
      </div>
    )
  }
}

Maps.propTypes = {
  city: PropTypes.string.isRequired,
  latlng: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

Maps.defaultProps = {
  width: 800,
  height: 400
}
