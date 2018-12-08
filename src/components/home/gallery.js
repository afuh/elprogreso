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
    const { gallery } = this.props
    const { currentImage, isOpen } = this.state

    return (
      <>
        <Images
          photos={gallery}
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
                fluid={photo.gatsby.fluid}
              />
            </div>
          )}
        />
        <Lightbox
          images={gallery}
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
  gallery: PropTypes.array.isRequired
}

export default Gallery
