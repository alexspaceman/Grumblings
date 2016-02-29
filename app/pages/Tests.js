import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'
import Header from '../components/Header.js'
import DbTest from '../components/DbTest.js'

class Tests extends Component {
  render () {
    return (
      <div style={ style.general }>
        <Header />
        <DbTest />
      </div>
    )
  }
}
module.exports = Radium(Tests)