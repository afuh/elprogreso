import React from 'react'
import styled, { css } from 'styled-components'

import Header from './header'
import BurgerMenu from './burgerMenu'
import { media } from '../../../utils/style'

const navigation = [
  { name: 'Home', path: '/' }
]

const Wrapper = styled.div`
  #burger {
    display: none;
  }

  ${media.phone(css`
    #header {
      display: none;
    }

    #burger {
      display: block;
    }

  `)}
`

const Navigation = () => (
  <Wrapper>
    <Header navigation={navigation}/>
    <BurgerMenu navigation={navigation}/>
  </Wrapper>
)

export default Navigation
