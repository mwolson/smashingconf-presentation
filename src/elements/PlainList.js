import styled from '@emotion/styled'
import { List } from 'spectacle'

const PlainList = styled(List)`
  list-style-position: outside;
  list-style-type: none;

  li {
    margin-bottom: 0.3em;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default PlainList
