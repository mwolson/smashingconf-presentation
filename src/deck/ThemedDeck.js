import React, { Component } from 'react'
import { Deck, Slide } from 'spectacle'
import * as slides from '../slides'

const SlideClasses = Object.values(slides)
const transition = []

class ThemedDeck extends Component {
  render() {
    const { children, theme } = this.props

    return (
      <Deck
        transition={transition}
        transitionDuration={500}
        theme={theme}
      >
        {
          React.Children.map(children, slide => {
            const SlideClass = slide.type
            if (!SlideClasses.some(inSlideClass => SlideClass !== inSlideClass)) return slide

            const { children: slideChildren, ...restProps } = slide.props

            return (
              <Slide bgColor={SlideClass.theme.bgColor} transition={transition} {...restProps}>
                {SlideClass.applyTheme(slide.props)}
              </Slide>
            )
          })
        }
      </Deck>
    )
  }
}

export default ThemedDeck
