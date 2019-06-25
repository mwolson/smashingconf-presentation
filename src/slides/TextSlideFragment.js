import React, { Component } from 'react'
import TextSlide from './TextSlide'

class TextSlideFragment extends Component {
  render() {
    const { children, component: SubComponent = 'div', ...restProps } = this.props

    return (
      <SubComponent {...restProps}>
        {TextSlide.applyTheme({ children })}
      </SubComponent>
    )
  }
}

export default TextSlideFragment
