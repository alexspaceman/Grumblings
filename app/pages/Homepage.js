import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'

import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Footer from '../components/Footer.js'

class Home extends Component {
  render () {
    return (
      <div style={ style.general }>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
module.exports = Radium(Home)