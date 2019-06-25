import styled from '@emotion/styled'
import { List } from 'spectacle'

const ArrowList = styled(List)`
  list-style-position: outside;

  li {
    margin-left: 0.9em;
    margin-bottom: 0.3em;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default ArrowList
