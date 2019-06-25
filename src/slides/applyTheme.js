import React from 'react'
import * as Spectacle from 'spectacle'
import * as Elements from '../elements'

const { Heading } = Spectacle
const ElementClasses = Object.values(Elements)
const SpectacleClasses = Object.values(Spectacle)

function applyTheme(theme, children) {
  const { bodyColor, headingCaps=false, headingColor, headingSize } = theme

  return React.Children.map(children, child => {
    if (
      !SpectacleClasses.some(inClass => child.type === inClass) &&
      !ElementClasses.some(inClass => child.type === inClass)
    ) {
      return child
    }

    if (child.type === Heading) {
      const headingProps = { textColor: headingColor, ...child.props, size: headingSize }
      if (headingCaps) headingProps.caps = true
      return React.cloneElement(child, headingProps)
    }

    return React.cloneElement(child, { textColor: bodyColor, ...child.props })
  })
}

export default applyTheme
