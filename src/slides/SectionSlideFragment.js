import React, { Component } from 'react'
import SectionSlide from './SectionSlide'

class SectionSlideFragment extends Component {
  render() {
    const { children, component: SubComponent = 'div', ...restProps } = this.props

    return (
      <SubComponent {...restProps}>
        {SectionSlide.applyTheme({ children })}
      </SubComponent>
    )
  }
}

export default SectionSlideFragment
