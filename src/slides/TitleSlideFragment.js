import React, { Component } from 'react'
import TitleSlide from './TitleSlide'

class TitleSlideFragment extends Component {
  render() {
    const { children, component: SubComponent = 'div', ...restProps } = this.props

    return (
      <SubComponent {...restProps}>
        {TitleSlide.applyTheme({ children })}
      </SubComponent>
    )
  }
}

export default TitleSlideFragment
