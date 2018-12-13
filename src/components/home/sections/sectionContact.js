import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FaChevronUp } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { animateScroll } from 'react-scroll'

import { Section as st, Wrapper as wr, Header, Contact as Info } from '../../../utils/UI'
import { fontSize, media } from '../../../utils/style'

import Map from '../map'
import ContactForm from '../contactForm'
import Social from '../socialLinks'

const Section = styled(st)`
  background: ${({ theme }) => theme.red};
  padding-top: 40px;

  .icon-wrapper {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
`

const Wrapper = styled(wr)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MapWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
`

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: row;

  p {
    margin: 0;
    letter-spacing: 0.1rem;

    ${fontSize(1.8)};
  }

  .form {
    margin-right: 40px;
  }

  ${media.phone(css`
    flex-direction: column;
    margin-top: 40px;

    .form {
      order: 2;
      margin: 0;
    }

    .map {
      order: 1;
      height: 400px;
      margin-bottom: 40px;
    }
  `)}
`

const Icon = styled(FaChevronUp)`
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

const Contact = ({ content, social }) => (
  <Section>
    <Header title={content.name} footer/>
    <Wrapper>
      <Info contact={content.info} />
      <Social social={social}/>
      <FormWrapper>
        <div className='form' >
          <p>{content.text.md.body}</p>
          <ContactForm />
        </div>
        <MapWrapper className='map'>
          <Map latlng={
            [content.info.location.lat, content.info.location.lon]
          }/>
        </MapWrapper>
      </FormWrapper>
    </Wrapper>
    <div className='icon-wrapper'>
      <Fade delay={300}>
        <Icon
          onClick={() => animateScroll.scrollToTop({
            duration: 1000,
            smooth: "ease"
          })}
        />
      </Fade>
    </div>
  </Section>
)

Contact.propTypes = {
  social: PropTypes.array.isRequired,
  content: PropTypes.shape({
    info: PropTypes.object,
    text: PropTypes.object
  }).isRequired
}

export default Contact
