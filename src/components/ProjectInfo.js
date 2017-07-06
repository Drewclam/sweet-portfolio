import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class ProjectInfo extends Component {

  handleClickOutside() {
    this.props.hideModal();
  }

  render() {
    const { project } = this.props;

    let projectInfo = {
      0:
      <div className="project-info">
        <span>It's Cut Time</span>
      </div>,
      1: <div>Recipely</div>,
      2: <div>FindAHike</div>,
      3: <div>ngchallenge</div>
    };

    {return project !== null && projectInfo[project]}
  }
}

export default onClickOutside(ProjectInfo);