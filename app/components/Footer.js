import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'

class Footer extends Component {
  render () {
    return (
      <div style={ style.footer }>
        <div style={ style.pageTitle }>Footer</div>
      </div>
    )
  }
}
module.exports = Radium(Footer)