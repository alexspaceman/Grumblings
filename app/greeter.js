import React, { Component } from 'react'
import config from './config.json'
import styles from './Greeter.css'
import { test, test2 } from './test.js'

class Greeter extends Component {
  render() {
    return (
      <div>
        <div className={ styles.root }>{ config.greetText }</div>
        <div>{ config.greetText2 }</div>
        <div>new div</div>
        <div>{ test.thing }</div>
        <div>{ test2.thing }</div>
        <div>NO RELOADING!!!</div>
      </div>
    )
  }
}

export default Greeter