import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'
import consts from '../styles/consts.js'

class Content extends Component {
  constructor () {
    super()

    this.handleResize = () => {
      let newState = this.state
      newState.contentStyle.height = window.innerHeight - consts.HEADER_HEIGHT - consts.FOOTER_HEIGHT - (consts.BORDER_WIDTH * 6)
      
      this.setState(newState)
    }

    this.state = {
      count: 0,
      contentStyle: {
        border: '3px rgb(108,199,44) solid',
        // there must be a better way to write this long shitty function and pull it dynamically from another file
        height: window.innerHeight - consts.HEADER_HEIGHT - consts.FOOTER_HEIGHT - (consts.BORDER_WIDTH * 6)
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  render () {
    return (
      <div style={ this.state.contentStyle }>
        <div style={ style.pageTitle }>Content</div>
      </div>
    )
  }
}
module.exports = Radium(Content)