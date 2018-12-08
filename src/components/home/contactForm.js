import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 6px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 2;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  :active,
  :focus,
  :hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`

const inputStyle = css`
  border: none;
  background: whitesmoke;
  display: block;
  margin: 10px 0 20px;
  padding: 0.9rem;
  transition: .2s border-color;

  &:focus {
    outline: 0;
  }
`

const Form = styled.form`
  margin-top: 10px;
`

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;
`

const Input = styled.input`
  ${inputStyle}
  max-width: 400px;
  width: 100%;
`

const Textarea = styled.textarea`
  ${inputStyle}
  height: 14em;
  max-width: 400px;
  width: 100%;
`

const ContactForm = ({ action }) => (
  <Form
    name="contact"
    method="post"
    action={action}
    data-netlify="true"
    data-netlify-honeypot="last-name"
  >
    <div style={{ display: "none" }}>
      <Label>Don’t fill out this field if you’re a human.
        <Input type="text" name="last-name" />
      </Label>
    </div>

    <Label>Nombre
      <Input type="text" name="name" required />
    </Label>
    <Label>E-mail
      <Input type="email" name="email" required />
    </Label>
    <Label>
      Mensaje
      <Textarea name="message" required placeholder='Hola!' />
    </Label>
    <Button type="submit">
      Enviar
    </Button>
    <Input type="hidden" name="form-name" value="contact" />
  </Form>
)

ContactForm.propTypes = {
  action: PropTypes.string.isRequired
}

ContactForm.defaultProps = {
  action: '/gracias/'
}

export default ContactForm
