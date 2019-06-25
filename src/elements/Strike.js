import React from 'react'
import { S } from 'spectacle'

const Strike = ({ children, ...restProps}) => (
  <S type={'strikethrough'} {...restProps}>{children}</S>
)

export default Strike
