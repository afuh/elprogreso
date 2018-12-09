import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { scroller } from 'react-scroll'

import { Section, Wrapper } from '../../../utils/UI'
import { media } from '../../../utils/style'

const HeroWrapper = styled(Section)`
  padding: 0;
  width: 100%;
  height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

const Opacity = styled(Background)`
  background: linear-gradient(to top, rgba(0,0,0, 0.7) 30%, rgba(0,0,0, 0.1));
  z-index: 1;
`

const Content = styled(Wrapper)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  color: ${({ theme }) => theme.white};
  text-align: center;

  h1 {
    font-weight: 900;
  }

  a {
    color: ${({ theme }) => theme.white};
  }

  a.phone-number {
    display: none;
  }

  ${media.phone(css`
    a.phone-number {
      display: inline;
    }
    span.phone-number {
      display: none;
    }
  `)}
`

const Icon = styled(FaChevronDown)`
  margin-top: 50px;
  width: 50px;
  height: 50px;
  padding: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  :hover {
    transform: scale(1.1)
  }

  transition: transform 0.2s ease-in;
`

const Logo = styled(GatsbyImg)`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  user-select: none;

  &.mobile {
    display: none;
  }

  ${media.phone(css`
    &.mobile {
      display: block;
    }

    &.desktop {
      display: none;
    }
  `)}

`

const BackgroundImage = styled(GatsbyImg)`
  height: 100%;
  width: 100%;
`

const Hero = ({ content }) => (
  <HeroWrapper>
    <Background>
      <Opacity />
      <BackgroundImage
        imgStyle={{ objectFit: "cover" }}
        alt={content.backgroundImage.title}
        fluid={content.backgroundImage.fluid}
      />
    </Background>
    <Content>
      <Logo
        className='desktop'
        alt={content.logo.title}
        fluid={content.logo.fluid}
      />
      <Logo
        className='mobile'
        alt={content.logoMobile.title}
        fluid={content.logoMobile.fluid}
      />
      <Text>
        <h1>
          {content.contact.address.md.body}
          {` `}-{` `}
          <span className='phone-number'>
            {content.contact.phoneNumber}
          </span>
          <a className='phone-number'
            href={"tel:011"+content.contact.phoneNumber}
          >
            {content.contact.phoneNumber}
          </a>
        </h1>
        <h2>
          <a href={"mailto:"+content.contact.email}>{content.contact.email}</a>
        </h2>
      </Text>
      <Fade delay={500}>
        <Icon
          onClick={() => scroller.scrollTo("historia", {
            duration: 1000,
            smooth: "easeOutQuint",
            offset: -40
          })}
        />
      </Fade>
    </Content>
  </HeroWrapper>
)

Hero.propTypes = {
  content: PropTypes.shape({
    logo: PropTypes.object,
    backgroundImage: PropTypes.object,
    contact: PropTypes.object
  }).isRequired
}

export default Hero
