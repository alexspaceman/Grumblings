import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'

class Header extends Component {
  render () {
    return (
      <div style={ style.header }>
        <div style={ style.pageTitle }>Header</div>
        <div style={ style.headerLinks }>
          <Link to="/" style={ style.headerLink }>Dashboard</Link>
          <Link to="/tests" style={ style.headerLink }>Tests</Link>
          <Link to="/" style={ style.headerLink }>Click Me</Link>
        </div>
      </div>
    )
  }
}
module.exports = Radium(Header)