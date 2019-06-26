import React, { Component } from 'react'
import { Link, Text as UpstreamText } from 'spectacle'
import styled from '@emotion/styled'

const Text = styled(UpstreamText)`
  text-decoration: underline;
`

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
