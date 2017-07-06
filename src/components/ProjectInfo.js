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
        <span className="project-info-title">It's Cut Time</span>
        <img src="https://puu.sh/wDmM5/3a26f51c05.png" />
        <div className="project-info-icons">
          <i className="icon-tech-angular"></i>
          <i className="icon-tech-typescript"></i>
          <i className="icon-tech-mysql"></i>
          <i className="icon-tech-nodejs"></i>
          <i className="icon-tech-expressjs"></i>
        </div>
        <div className="project-info-content-wrapper">
          <span className="project-info-description">
            A platform to bring local hairstylists directly to the user's door and manage appointment bookings.
          </span>
          <span className="project-info-github">Github</span>
        </div>
      </div>,
      1: <div>Recipely</div>,
      2: <div>FindAHike</div>,
      3: <div>ngchallenge</div>
    };

    {return project !== null && projectInfo[project]}
  }
}

export default onClickOutside(ProjectInfo);