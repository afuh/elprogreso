import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { theme } from '../../utils/style'

const Content = styled.header`
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`

const Header = () => (
  <Content>
    <Link
      activeStyle={{ color: theme.deeporange }}
      style={{ marginRight: 10 }}
      to="/"
    >
      Home
    </Link>
  </Content>
)

export default Header
