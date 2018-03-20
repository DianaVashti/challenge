import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDom, { Router, Route, browserHistory } from 'react-router'

import LandingPage from './views/LandingPage/landingPage'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    return (
      <Router history={browserHistory}>
        <Route path="*" component={landingPageComponent} />
      </Router>
    )
  }
}
