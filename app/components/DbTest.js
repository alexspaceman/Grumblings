import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import style from '../styles/styles.js'

class DbTest extends Component {
  constructor () {
    super()

    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <div style={ style.content }>
        <div>COUNTER</div>
        <div>{ this.state.count }</div>
        <button onClick = { () => {this.setState({ count: this.state.count += 1 })} }>+1</button>
        <button onClick = { () => {this.setState({ count: this.state.count -= 1 })} }>-1</button>
      </div>
    )
  }
}
module.exports = Radium(DbTest)