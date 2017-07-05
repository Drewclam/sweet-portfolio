import React, { Component } from 'react';

export default class ProjectInfo extends Component {
  render() {
    const { project } = this.props;

    let projectInfo = {
      0: <div>project 0</div>,
      1: <div>recipely</div>,
      2: <div>takeahike</div>,
      3: <div>ngchallenge</div>
    };

    return (
      <div>
        {projectInfo[project]}
      </div>
    );
  }
}