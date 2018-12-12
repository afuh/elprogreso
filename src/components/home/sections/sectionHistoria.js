import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled from 'styled-components'

import { Section, Wrapper as Wp, Header } from '../../../utils/UI'
import { fontSize } from '../../../utils/style'

const Text = styled.p`
  ${fontSize(2)}
`

const Wrapper = styled(Wp)`
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  max-width: 600px;
  margin: 40px 0;
`

const Historia = ({ content }) => {
  const [intro, medio, final] = content.text.md.body.split("\n").filter(item => item.length > 0)
  const [vieja, renovada] = content.gallery

  return (
    <>
      <Section id='historia'>
        <Header title={content.name} />
        <Wrapper>
          <Inner>
            <Text>{intro}</Text>
            <GatsbyImg
              style={{ width: "100%", borderRadius: 20 }}
              alt={vieja.title}
              fluid={vieja.fluid}
            />
            <Text>{medio}</Text>
            <GatsbyImg
              style={{ width: "100%", borderRadius: 20 }}
              alt={renovada.title}
              fluid={renovada.fluid}
            />
            <Text>{final}</Text>
          </Inner>
        </Wrapper>
      </Section>
    </>
  )
}

Historia.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default Historia
