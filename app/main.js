import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Testpage } from './components/Testpage'
import mainStyles from './styles/main.css'

const Home = React.createClass({
  render() {
    return (
      <div className={ mainStyles.siteContainer }>
        <div className={ mainStyles.header }>
          <div className={ mainStyles.headerTitle }>Spaceman's Playground</div>
          <div className={ mainStyles.headerLinks }>
            <Link to="/homepage" className={ mainStyles.headerLink }>Testpage</Link>
          </div>
        </div>
        <div className={ mainStyles.mainView }>
          { this.props.children }
        </div>
        <div className={ mainStyles.footer }>
          Footer
        </div>
      </div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={ Home }>
      <Route path="homepage" component={ Testpage }/>
    </Route>
  </Router>
), document.getElementById('root'))