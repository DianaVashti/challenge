import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import ProjectListView from './projectListView'

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ProjectListView />
      </div>
    )
  }
}
