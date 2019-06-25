import React, { Component } from 'react'
import { Slide } from 'spectacle'
import applyTheme from './applyTheme'

const theme = {
  bgColor: "quartenary",
  bodyColor: "secondary",
  headingCaps: true,
  headingColor: "tertiary",
  headingSize: 4,
}

class SectionSlide extends Component {
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

export default SectionSlide
