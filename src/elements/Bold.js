import React from 'react'
import { S } from 'spectacle'

const Bold = ({ children, ...restProps}) => (
  <S type={'bold'} {...restProps}>{children}</S>
)

export default Bold
