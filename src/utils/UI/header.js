import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import styled, { css } from 'styled-components'

import { Wrapper } from './'
import { fontSize, media } from '../style'

const Container = styled.header`
  padding: 2% 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Vigneta = styled(GatsbyImg)`
  width: 100%;
  flex: 1;
`

const Title = styled.h2`
  flex: 1;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  font-style: italic;
  color: ${({ theme }) => theme.red};
  ${fontSize(4.4)};

  ${media.mobile(css`
    flex: 1;
  `)}

  ${media.phone(css`
    white-space: normal;
  `)}

  ${({ theme, footer }) => footer && css`
    color: ${theme.white};
  `};
`

export const Header = ({ title, footer }) => (
  <StaticQuery
    query={query}
    render={({ left, right, wLeft, wRight }) => (
      <Container>
        <Wrapper>
          <Fade>
            <Content>
              <Vigneta
                alt='Vignetas'
                fluid={!footer ? left.fluid : wLeft.fluid}
              />
              <Title
                footer={footer}
              >
                {title}
              </Title>
              <Vigneta
                alt='Vignetas'
                fluid={!footer ? right.fluid : wRight.fluid}
              />
            </Content>
          </Fade>
        </Wrapper>
      </Container>
    )}
  />
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.bool
}

const query = graphql`
  query VIGNETAS {
    left: contentfulAsset(title: {regex: "/vigneta left/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    right: contentfulAsset(title: {regex: "/vigneta right/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    wLeft: contentfulAsset(title: {regex: "/vigneta-white left/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    wRight: contentfulAsset(title: {regex: "/vigneta-white right/i"}) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
`
