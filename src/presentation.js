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
  LinkAndText,
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
          <Heading>Building a Design Style Guide</Heading>
        </SectionSlide>
        <TextSlide>
          <Heading>Taxonomy</Heading>
          <CenteredPlainList>
            <ListItem>Atoms - smallest unit which is more than single HTML tag</ListItem>
            <ListItem>Molecules - medium unit which is a collection of atoms</ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Build using Storybook or something else which allows embedding the same
              real code and styles as you use on the website
            </ListItem>
            <ListItem>
              Name things consistently, in a way that they may be shared more easily.
            </ListItem>
            <ListItem></ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Sarah Drasner from Microsoft and CSS-Tricks</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>Emmet templates allow writing nested HTML quickly</ListItem>
            <ListItem>CSS grid generators are helpful for irregular-looking responsive layouts</ListItem>
            <ListItem>Greensock Animation (GSAP module) for animations</ListItem>
            <ListItem>Probably a good idea for everyone to spend quality time learning snippets</ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Internationalization - Beyond Text Strings</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>Culture matters quite a lot</ListItem>
            <ListItem>Getting it right can involve layout and high-level content changes</ListItem>
            <LinkAndText href={'https://www.hofstede-insights.com/country-comparison/'} />
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>Chinese users like to have less-simple "newsletter" layout</ListItem>
            <ListItem>Avoid taboos, like "4" in China</ListItem>
            <ListItem>German users like to have extra security badges and explanation of pros/cons</ListItem>
            <ListItem>Listing cons for them actually <Bold>increased</Bold> conversion</ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Animations from Scratch</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>If you don't have shapes yet, make some with Illustrator</ListItem>
            <ListItem>Use "asset export" instead of Save As</ListItem>
            <ListItem>
              When exporting, also export a manually-created background rectangle which has the
              entire space of the area/viewbox that the animation is meant to be placed in.
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>Prefer classes instead of IDs</ListItem>
            <ListItem>IDs are useful for cloning an element with {'<use>'} however</ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Service Workers</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Very dangerous because the worker can go unresponsive if it's not coded well
            </ListItem>
            <ListItem>
              Pretty much requires TDD practices to mitigate this risk
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Benefit: Might be useful to have network handling and JSON parsing be on a service worker,
              so that we don't block the UI thread
            </ListItem>
            <ListItem>
              Caveat: Service workers are often used for caching, but showing stale data to the users
              can be a terrible product experience unless done thoughtfully.
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Idea: If there is something that we must fetch when we get something that triggers a push
              notification on Desktop, go ahead and fetch it at the time we show the user the
              notification
            </ListItem>
            <ListItem>
              Caveat: We don't have much data like this - we usually surface enough info with the SSE
              event itself
            </ListItem>
          </CenteredPlainList>
        </TextSlide>

        <TitleSlide>
          <Heading>Questions?</Heading>
          <CenteredPlainList>
            <ListItem>
              <LinkAndText
                href={'https://docs.google.com/document/d/1M37JEJWaj-ShScJNi5v7Mf-Mvl1T9SIbimxRQHGioYA/edit#heading=h.oq9dlh6pjuml'}
                text={'Day 1 shared notes'}
                textColor={'secondary'}
              />
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://docs.google.com/document/d/125nM6oOsZEq-RR6RSBAGDG5Z0zkjPqH3zzud0ThLoiw/edit#'}
                text={'Day 2 shared notes'}
                textColor={'secondary'}
              />
            </ListItem>
          </CenteredPlainList>
        </TitleSlide>
      </ThemedDeck>
    )
  }
}
