import styled from '@emotion/styled'
import { List } from 'spectacle'

const ArrowList = styled(List)`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  max-width: 100%;
  list-style-position: outside;

  li {
    margin-bottom: 0.3em;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default ArrowList
