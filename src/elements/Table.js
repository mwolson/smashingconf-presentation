import styled from '@emotion/styled'
import { Table as UpstreamTable } from 'spectacle'

const Table = styled(UpstreamTable)`
  border-spacing: 0.6rem;
  font-size: 2.5rem;
  text-align: left;

  td, th {
    vertical-align: top;
  }
`

export default Table
