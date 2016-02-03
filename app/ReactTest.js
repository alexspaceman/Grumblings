import React, { Component } from 'react'
import testJson from './test.json'
import styles from './ReactTest.css'
import { test, test2 } from './test.js'

class ReactTest extends Component {
  render() {
    return (
      <div>
        <div className={ styles.root }>JSX div testing imported class</div>
        <div className={ styles.root }>{ testJson.greetText }</div>
        <div>{ testJson.greetText2 }</div>
        <div>new in JSX div</div>
        <div>{ test.thing }</div>
        <div>{ test2.thing }</div>
        <div>NO RELOADING!!!</div>
      </div>
    )
  }
}

export { ReactTest }