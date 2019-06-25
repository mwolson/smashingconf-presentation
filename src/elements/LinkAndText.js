import React, { Component } from 'react'
import { Link, Text } from 'spectacle'

class LinkAndText extends Component {
  render() {
    const { href, text=href, textColor="tertiary" } = this.props
    return (
      <Link href={href}>
        <Text textColor={textColor}>
          {text}
        </Text>
      </Link>
    )
  }
}

export default LinkAndText
