import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import styled, { css } from 'styled-components'

import { Wrapper } from './'
import { fontSize, media, border } from '../style'

const Container = styled.header`
  background: ${({ theme }) => theme.red};
  padding: 1% 0;

  ${({ footer, theme }) => !footer && css`
    ${border}
    border: 10px solid ${theme.white};
    transform: translateY(-10px);
  `}
`

export const Content = styled.div`
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Vigneta = styled(GatsbyImg)`
  width: 100%;
  flex: 1;

  ${media.phone(css`
    transform: translateY(0);
  `)}
`

const Title = styled.h2`
  flex: 1;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  font-style: italic;
  ${fontSize(4.4)};

  ${media.mobile(css`
    flex: 1;
  `)}

  ${media.phone(css`
    white-space: normal;
  `)}
`

export const Header = ({ title, footer }) => (
  <StaticQuery
    query={query}
    render={({ left, right }) => (
      <Container footer={footer}>
        <Wrapper>
          <Fade>
            <Content>
              <Vigneta
                alt='Vignetas'
                fluid={left.fluid}
              />
              <Title>{title}</Title>
              <Vigneta
                alt='Vignetas'
                fluid={right.fluid}
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
  }
`
