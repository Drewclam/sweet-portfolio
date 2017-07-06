import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class ProjectInfo extends Component {

  handleClickOutside() {
    console.log('clicked outside');
  }

  render() {
    const { project, hideModal } = this.props;

    let projectInfo = {
      0: <h2>It's Cut Time</h2>,
      1: <div>recipely</div>,
      2: <div>takeahike</div>,
      3: <div>ngchallenge</div>
    };

    return (
      <div className="project-info">
        {projectInfo[project]}
      </div>
    );
  }
}

export default onClickOutside(ProjectInfo);