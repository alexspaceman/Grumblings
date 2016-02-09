import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import styles from './rootStyles.css'

import Home from './components/Home.js'
import Tests from './components/Tests.js'

render((
  <Router>
    <Route path="/" component={ Home } />
    <Route path="tests" component={ Tests } />
  </Router>
), document.getElementById('root'))