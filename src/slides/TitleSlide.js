import React, { Component } from 'react'
import { Slide } from 'spectacle'
import applyTheme from './applyTheme'

const theme = {
  bgColor: "tertiary",
  bodyColor: "secondary",
  headingCaps: false,
  headingColor: "primary",
  headingSize: 4, // usually 3, but the title is too wide to fit
}

class TitleSlide extends Component {
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

export default TitleSlide
