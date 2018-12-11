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
  const [intro, _, final] = content.text.md.body.split("\n") // eslint-disable-line

  return (
    <>
    <Section id='historia'>
      <Header title={content.name} />
      <Wrapper>
        <Inner>
          <Text>{intro}</Text>
          {content.gallery.map(photo => (
            <GatsbyImg
              style={{ width: "100%", borderRadius: 20 }}
              key={photo.title}
              alt={photo.title}
              fluid={photo.fluid}
            />
          ))}
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
