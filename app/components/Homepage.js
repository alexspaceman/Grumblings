import React, { Component } from 'react'
import styles from '../styles/Homepage.css'
import { test } from '../data/testData.js'

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className={ styles.root }>This is the Homepage</div>
        <div>{ test.first }</div>
        <div className={ styles.button }>Test Area</div>
      </div>
    )
  }
}

export { Homepage }