import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import styles from './rootStyles.css'

import Homepage from './pages/Homepage.js'
import Tests from './pages/Tests.js'

render((
  <Router>
    <Route path="/" component={ Homepage } />
    <Route path="tests" component={ Tests } />
  </Router>
), document.getElementById('root'))