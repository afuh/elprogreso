import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { FaSpinner } from 'react-icons/fa'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

export const Button = styled.button`
  border-radius: 6px;
  padding: 10px 40px;
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 2;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: 1px solid white;

  cursor: ${({ isLoading }) => !isLoading && 'pointer'};

  ${({ isLoading, theme }) =>
    !isLoading &&
    css`
      :active,
      :focus,
      :hover {
        border: 1px solid ${theme.darkGray};
        background: ${theme.darkGray};
        color: ${theme.white};
      }
    `}

  transition: all .2s;
`

const Spinner = styled(FaSpinner)`
  animation: ${() => keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `}
    2s linear infinite;

  padding: 0;
`

const inputStyle = css`
  border: none;
  border-radius: 6px;
  background: whitesmoke;
  display: block;
  margin: 10px 0 20px;
  padding: 0.9rem;
  transition: 0.2s border-color;

  &:focus {
    outline: 0;
  }
`

const Form = styled.form`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;

  ${({ nonHuman }) =>
    nonHuman &&
    css`
      display: none;
    `}
`

const Input = styled.input`
  ${inputStyle}
  width: 100%;
`

const Textarea = styled.textarea`
  ${inputStyle}
  height: 14rem;
  width: 100%;
`

const SubmitArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isLoading: false,
    notification: null,
  }

  handleNotification(notification) {
    this.setState({ notification })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, name, message } = this.state

    if (isEmpty(name) || isEmpty(message) || isEmpty(email)) {
      return this.handleNotification('Por favor, completá todos los campos.')
    }

    if (!isEmail(email)) {
      return this.handleNotification('Por favor, ingresá una dirección de correo valida.')
    }

    await this.handleFetch({
      email: normalizeEmail(email),
      name: name.trim(),
      message: message.trim(),
    })
  }

  async handleFetch({ ...data }) {
    const encode = (payload) =>
      Object.keys(payload)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]))
        .join('&')

    try {
      this.setState({ isLoading: true })

      await fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...data,
        }),
      })
      this.handleNotification('Gracias, el mensaje se ha enviado exitosamente.')
    } catch (error) {
      this.handleNotification(error.message)
    } finally {
      this.setState({
        name: '',
        email: '',
        message: '',
        isLoading: false,
      })
    }
  }

  render() {
    const { name, email, message, isLoading, notification } = this.state

    return (
      <fieldset disabled={isLoading} style={{ border: 'none', padding: 0 }}>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="last-name"
          onSubmit={this.handleSubmit}
        >
          <Label nonHuman>
            Don’t fill out this field if you’re a human.
            <Input type="text" name="last-name" />
          </Label>

          <Label>
            Nombre
            <Input onChange={this.handleChange} value={name} type="text" name="name" required />
          </Label>
          <Label>
            E-mail
            <Input onChange={this.handleChange} value={email} type="email" name="email" required />
          </Label>
          <Label>
            Mensaje
            <Textarea onChange={this.handleChange} value={message} name="message" placeholder="Hola!" required />
          </Label>
          <SubmitArea>
            {notification && <p>{notification}</p>}
            <Button isLoading={isLoading} type="submit">
              {isLoading ? <Spinner /> : 'Enviar'}
            </Button>
          </SubmitArea>

          <Input type="hidden" name="form-name" value="contact" />
        </Form>
      </fieldset>
    )
  }
}

export default ContactForm
