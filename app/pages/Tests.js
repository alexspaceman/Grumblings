import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'
import Header from '../components/Header.js'

class Tests extends Component {
  render () {
    return (
      <div style={ style.general }>
        <div>Tests</div>
        <div><Link to="/">Dashboard</Link></div>
        <Header />
      </div>
    )
  }
}
module.exports = Radium(Tests)