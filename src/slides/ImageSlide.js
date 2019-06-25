import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'spectacle'

const fullScreenStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  top: 'calc(-50vh + 50%)',
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  padding: '10vh 10vw',
}

const imageStyle = {
  height: '100%',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
}

class ImageSlide extends Component {
  static propTypes = {
    image: PropTypes.string,
  }

  render() {
    const { image, ...restProps } = this.props

    return (
      <div style={fullScreenStyle} {...restProps}>
        <div style={{ flex: 1, position: 'relative', width: '100%' }}>
          <Image style={imageStyle} src={image} />
        </div>
      </div>
    )
  }
}

export default ImageSlide
