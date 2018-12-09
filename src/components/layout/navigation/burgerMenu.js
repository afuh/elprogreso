import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import push from "react-burger-menu/lib/menus/push"
import styled from 'styled-components'

import { theme } from '../../../utils/style'

const Menu = styled(push)`
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    color: ${({ theme }) => theme.gray};
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;

    &:hover {
      text-decoration: none;
      color: #000;
    }

    transition: all .2s ease-in-out;

  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

class BurgerMenu extends Component {
  state ={
    isOpen: false
  }
  showSettings(e) {
    e.preventDefault()
  }
  handleChange = ({ isOpen }) => {
    this.setState({ isOpen })
  }

  render() {
    const { navigation } = this.props
    const { isOpen } = this.state

    return (
      <nav id='burger'>
        <Menu
          width={200}
          isOpen={isOpen}
          onStateChange={this.handleChange}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          {navigation.map(item => (
            <Link
              key={item.name}
              activeStyle={{ color: theme.active }}
              style={{ marginRight: 10 }}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </Menu>
      </nav>
    )
  }
}

BurgerMenu.propTypes = {
  navigation: PropTypes.array.isRequired
}

export default BurgerMenu
