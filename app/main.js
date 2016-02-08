import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Homepage } from './components/Homepage'
import './main.css'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/homepage">Homepage</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={ App }>
      <Route path="homepage" component={ Homepage }/>
    </Route>
  </Router>
), document.getElementById('root'))