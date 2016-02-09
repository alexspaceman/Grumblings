import React, { Component } from 'react'
import styles from '../styles/Testpage.css'
import { test } from '../data/testData.js'

class Testpage extends Component {
  render() {
    return (
      <div>
        <div className={ styles.root }>This is the Testpage</div>
        <div>{ test.first }</div>
        <div className={ styles.button }>Test Button</div>
      </div>
    )
  }
}

export { Testpage }