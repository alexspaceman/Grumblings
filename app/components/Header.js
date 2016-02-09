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
          <span><Link to="/">Dashboard</Link></span>
          <span><Link to="/tests">Tests</Link></span>
        </div>
      </div>
    )
  }
}
module.exports = Radium(Header)