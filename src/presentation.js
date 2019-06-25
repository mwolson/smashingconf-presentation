/* eslint react/jsx-pascal-case: "off" */
/* eslint no-unused-vars: "off" */

import React, { Component } from 'react'
import {
  Appear,
  Heading,
  ListItem,
  TableBody,
  TableItem,
  TableRow,
} from 'spectacle';
import { ThemedDeck } from './deck'
import {
  ArrowList,
  Bold,
  CenteredArrowList,
  CenteredPlainList,
  CheckedBox as CB_J,
  PlainList,
  Strike,
  Table,
  Text,
  UncheckedBox as CB_O,
} from './elements'
import {
  ImageSlide,
  SectionSlide,
  SectionSlideFragment,
  TextSlide,
  TextSlideFragment,
  TitleSlide,
} from './slides'
import theme from './theme'

require('normalize.css')

export default class Presentation extends Component {
  render() {
    return (
      <ThemedDeck theme={theme}>
        <TitleSlide>
          <Heading>SmashingConf 2019</Heading>
          <Text>Key Takeaways</Text>
        </TitleSlide>

        <SectionSlide>
          <Heading>Topics</Heading>
        </SectionSlide>
        <TextSlide>
          <Heading>Day 1</Heading>
          <CenteredPlainList>
            <ListItem>Emmet templates</ListItem>
          </CenteredPlainList>
        </TextSlide>

        <TitleSlide>
          <Heading>Questions?</Heading>
        </TitleSlide>
      </ThemedDeck>
    )
  }
}
