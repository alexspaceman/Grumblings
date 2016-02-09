import React, { Component } from 'react'
import Radium from 'radium'
import { Router, Route, Link } from 'react-router'

class Tests extends Component {
  render () {
    return (
      <div>
        <div>Tests</div>
        <div><Link to="/">Dashboard</Link></div>
      </div>
    )
  }
}
module.exports = Radium(Tests)