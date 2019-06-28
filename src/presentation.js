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
          <br />
          <br />
          <LinkAndText
            href={'https://github.com/mwolson/smashingconf-presentation'}
            textColor={'secondary'}
          />
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
              Caveat: If you can surface enough data with the event that triggers a push notification,
              then you might not need to fetch anything, which is an even better user experience.
            </ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>CSS `display: grid`</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Allows HTML to be flattened somewhat - you can just tell a div to position itself within
              a grid
            </ListItem>
            <ListItem>
              Unlike Flex, you can have overlapping elements
            </ListItem>
            <ListItem>CSS grid generators are helpful for irregular-looking responsive layouts</ListItem>
            <ListItem>
              <LinkAndText
                href={'https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/'}
                text={'IE 11 status: Uses older version of the grid standard'}
              />
            </ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Spicing up websites</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Can be easier to play with page layout in something like Photoshop.
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://alternativeto.net/software/weblayers/'}
                text={'Tools which can export the layers of a webpage to PSD format'}
              />
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Tricks to lead user down the page:
            </ListItem>
            <ListItem>
              Angles, overlapping images, share background color between components
              (use sparingly), use shadows instead of hard boxes
            </ListItem>
          </CenteredPlainList>
        </TextSlide>

        <SectionSlide>
          <Heading>Dark Mode-ing a Website</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Best way is probably CSS Variables, though for prototyping React props can work.
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://stackoverflow.com/questions/46429937/ie11-does-a-polyfill-script-exist-for-css-variables'}
                text={'There\'s an IE11 "ponyfill"'}
              />
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Be aware of your darkest and lightest colors, since it changes which colors work together
              well; in general avoid 100% black and 100% white
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://github.com/pburkeland/colorvisor/'}
                text={'ColorVisor tool for chart with advice on adjacent colors'}
              />
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://colorable.jxnblk.com/'}
                text={'Color contrast tool for background + foreground'}
              />
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              <LinkAndText
                href={'https://wgtwo.com/blog/hacking-dark-themes-with-css-blend-modes/'}
                text={'Interesting idea on automatically picking dark mode colors'}
              />
            </ListItem>
            <ListItem>
              Caveat: Using blend CSS properties like they do is not performant
            </ListItem>
            <ListItem>
              But if we instead math out the transforms and just have the new dark mode colors be
              checked-in static values, could be a very useful starting point
            </ListItem>
          </CenteredPlainList>
        </TextSlide>


        <SectionSlide>
          <Heading>Website Performance</Heading>
        </SectionSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>Tools:</ListItem>
            <ListItem>
              <LinkAndText
                href={'https://developers.google.com/speed/pagespeed/insights/'}
                text={'Latest Google performance suggestion website'}
              />
            </ListItem>
            <ListItem>
              <LinkAndText
                href={'https://speedcurve.com/'}
                text={'SpeedCurve, for performance budgets'}
              />
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Avoid flash of unstyled content
            </ListItem>
            <ListItem>
              Avoid preloaded but "unclickable" content; for TigerConnect: this happens on our existing
              login page, we should fix it (next slide)
            </ListItem>
            <ListItem>
              There's a "swap" CSS keyword which can automatically switch to a webfont when it
              finishes loading
            </ListItem>
          </CenteredPlainList>
        </TextSlide>
        <TextSlide>
          <CenteredPlainList>
            <ListItem>
              Split JS into first experience content and later experience content
            </ListItem>
            <ListItem>
              Same for CSS
            </ListItem>
            <ListItem>
              For TigerConnect: Let's create a separate lightweight login page bundle that preloads
              the rest of the Messenger JS and CSS
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
