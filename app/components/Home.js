import React, { Component } from 'react'
import Radium from 'radium'
import { Router, Route, Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <div>
        <div>Dashboard</div>
        <div><Link to="/tests">Tests</Link></div>
      </div>
    )
  }
}
module.exports = Radium(Home)