import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Homepage } from './components/Homepage'

import './main.css'

render(<Homepage />, document.getElementById('root'))