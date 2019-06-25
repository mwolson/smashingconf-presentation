import React from 'react'
import styled from '@emotion/styled'

const UnstyledBox = ({ className }) => (
  <span className={className}>☐</span>
)

const UncheckedBox = styled(UnstyledBox)`
  color: #b6ad9a;
  font-size: 120%;
`

export default UncheckedBox
