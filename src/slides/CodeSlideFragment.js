import React, { Component } from 'react'
import CodeSlide from './CodeSlide'

class CodeSlideFragment extends Component {
  render() {
    const { children, component: SubComponent = 'div', ...restProps } = this.props

    return (
      <SubComponent {...restProps}>
        {CodeSlide.applyTheme({ children })}
      </SubComponent>
    )
  }
}

export default CodeSlideFragment
