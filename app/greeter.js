import React, { Component } from 'react'
import config from './config.json'

class Greeter extends Component {
  render() {
    return (
      <div>
        <div>{ config.greetText }</div>
        <div>{ config.greetText2 }</div>
        <div>new div</div>
      </div>
    )
  }
}

export default Greeter