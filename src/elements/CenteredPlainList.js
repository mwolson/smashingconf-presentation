import styled from '@emotion/styled'
import { List } from 'spectacle'

const CenteredPlainList = styled(List)`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  max-width: 100%;
  list-style-position: outside;
  list-style-type: none;

  li {
    margin-top: 0.4em;
    margin-bottom: 0.2em;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export default CenteredPlainList
