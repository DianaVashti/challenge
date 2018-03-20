import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class ProjectListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staticProjectId = '599778316289500',
      projectData = [],
      isLoading = true;
    }
  }

  fetchProjectData() {
    

  }

  doneLoading() {
    return this.setState({isLoading = false})
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}
