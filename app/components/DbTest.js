import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'
import consts from '../styles/consts.js'

class DbTest extends Component {
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
        height: window.innerHeight - consts.HEADER_HEIGHT - consts.FOOTER_HEIGHT - (consts.BORDER_WIDTH * 6)
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <div style={ this.state.contentStyle }>
        <div>COUNTER</div>
        <div>{ this.state.count }</div>
        <button onClick = { () => {this.setState({ count: this.state.count += 1 })} }>+1</button>
        <button onClick = { () => {this.setState({ count: this.state.count -= 1 })} }>-1</button>

        <div>

        </div>
      </div>
    )
  }
}
module.exports = Radium(DbTest)