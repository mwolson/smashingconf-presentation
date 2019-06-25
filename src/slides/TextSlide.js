import React, { Component } from 'react'
import { Slide } from 'spectacle'
import applyTheme from './applyTheme'

const theme = {
  bgColor: "secondary",
  bodyColor: "primary",
  headingCaps: true,
  headingColor: "tertiary",
  headingSize: 6,
}

class TextSlide extends Component {
  static theme = theme

  static applyTheme({ children }) {
    return applyTheme(theme, children)
  }

  render() {
    const { children, ...restProps } = this.props

    return (
      <Slide bgColor={theme.bgColor} {...restProps}>
        {applyTheme(theme, children)}
      </Slide>
    )
  }
}

export default TextSlide
