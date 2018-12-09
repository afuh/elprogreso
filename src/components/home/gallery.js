import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import Lightbox from 'react-images'
import styled, { css } from 'styled-components'

import { media } from '../../utils/style'

const margin = 4

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const ImageWrapper = styled.div`
  flex-basis: calc(${({ big }) => big ? 50 : 25}% - ${margin*2}px);
  margin: ${margin}px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  ${media.mobile(css`
    flex-basis: calc(50% - ${margin*2}px);
  `)}

  ${media.phone(css`
    flex-basis: 100%;
  `)}
`

const Overlay = styled.div`
  cursor: pointer;
  opacity: 0;
  background: linear-gradient(to top, rgba(0,0,0, 0.7) 10%, rgba(0,0,0, 0.1));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding-bottom: 30px;

  :hover {
    opacity: 1;
  }

  transition: opacity ease-in-out 0.3s;
`

class Gallery extends Component {
  state = {
    currentImage: 0
  }

  openLightbox = currentImage => {
    this.setState({
      currentImage,
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
      <Wrapper>
        {photos.map((photo, i) => (
          <ImageWrapper
            big={!!((i === 0 || i === 9))}
            key={i}
            onClick={() => this.openLightbox(i)}
          >
            <Overlay>
              <h2>{photo.caption}</h2>
            </Overlay>
            <GatsbyImg
              alt={photo.caption}
              title={photo.caption}
              imgStyle={{ objectFit: "cover" }}
              style={{ height: "100%", maxHeight: 400 }}
              fluid={photo.fluid}
            />
          </ImageWrapper>
        ))}
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={isOpen}
          backdropClosesModal
        />
      </Wrapper>
    )
  }
}

Gallery.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Gallery
