import React, { Component } from 'react'
import UpstreamCodeSlide from 'spectacle-code-slide';
import applyTheme from './applyTheme'

const theme = {
  bgColor: "secondary",
  bodyColor: "primary",
  headingCaps: true,
  headingColor: "tertiary",
  headingSize: 6,
}

class CodeSlide extends Component {
  static theme = theme

  static applyTheme({ children }) {
    return applyTheme(theme, children)
  }

  render() {
    const { children, code, lang="js", ranges, ...restProps } = this.props

    return (
      <UpstreamCodeSlide bgColor={theme.bgColor} {...{ code, lang, ranges }} {...restProps}>
        {applyTheme(theme, children)}
      </UpstreamCodeSlide>
    )
  }
}

export default CodeSlide
