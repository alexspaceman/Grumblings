import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Radium from 'radium'

// import Home from './components/Home.js'

// @Radium
class Home extends React.Component {
  render () {
    return (
      <div>
        This is Home!
      </div>
    )
  }
}

render((
  <Router>
    <Route path="/" component={ Home }>
    </Route>
  </Router>
), document.getElementById('root'))