import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import Lightbox from 'react-images'
import Images from 'react-photo-gallery'

class Gallery extends Component {
  state = {
    currentImage: 0
  }

  openLightbox = (e, { index }) => {
    this.setState({
      currentImage: index,
      isOpen: true
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      isOpen: false
    })
  }
  gotoPrevious = () => {
    this.setState(state => ({
      currentImage: state.currentImage - 1
    }))
  }
  gotoNext = () => {
    this.setState(state => ({
      currentImage: state.currentImage + 1
    }))
  }
  render() {
    const { photos } = this.props
    const { currentImage, isOpen } = this.state

    return (
      <>
        <Images
          photos={photos}
          onClick={this.openLightbox}
          ImageComponent={({ index, photo, margin, onClick }) => (
            <div onClick={e => onClick(e, { index })}> {/* eslint-disable-line */}
              <GatsbyImg
                style={{
                  cursor: 'pointer',
                  width: photo.width,
                  height: photo.height,
                  margin
                }}
                fluid={photo.fluid}
              />
            </div>
          )}
        />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={isOpen}
          backdropClosesModal
        />
      </>
    )
  }
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Gallery
