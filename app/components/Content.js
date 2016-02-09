import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'

class Content extends Component {
  render () {
    return (
      <div style={ style.content }>
        <div style={ style.pageTitle }>Content</div>
      </div>
    )
  }
}
module.exports = Radium(Content)