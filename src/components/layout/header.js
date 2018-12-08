import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.header.attrs({
  id: "header"
})`
  position: fixed;
  top: 0;
  height: ${({ theme }) => theme.position.navHeight};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  width: 100%;
  z-index: 9;

  background: #0000002e;

  transition: all .4s ease;
`

const Header = () => (
  <Wrapper>
    <Link
      style={{ marginRight: 10, color: '#fff' }}
      to="/"
    >
      Home
    </Link>
  </Wrapper>
)

export default Header
