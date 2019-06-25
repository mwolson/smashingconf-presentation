import React from 'react'
import styled from '@emotion/styled'

const UnstyledBox = ({ className }) => (
  <span className={className}>☑</span>
)

const CheckedBox = styled(UnstyledBox)`
  color: #72cb8bde;
  font-size: 120%;
`

export default CheckedBox
