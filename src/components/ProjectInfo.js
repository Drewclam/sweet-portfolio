import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class ProjectInfo extends Component {

  handleClickOutside() {
    this.props.hideModal();
  }

  render() {
    const { project } = this.props;

    let projectData = {
      title: {
        0: 'It\'s Cut Time',
        1: 'Recipely',
        2: 'FindAHike',
        3: 'ng-Challenge'
      },
      image: {
        0: 'https://puu.sh/wDmM5/3a26f51c05.png',
        1: 'https://puu.sh/wDoSw/c1ac86fc12.png'
      },
      icons: {
        0: [
          <i className="icon-tech-angular"></i>,
          <i className="icon-tech-typescript"></i>,
          <i className="icon-tech-mysql"></i>,
          <i className="icon-tech-nodejs"></i>,
          <i className="icon-tech-expressjs"></i>
        ],
        1: [
          <i className="icon-tech-react"></i>,
          <i className="icon-tech-javascript"></i>,
          <i className="icon-tech-postgres"></i>,
          <i className="icon-tech-nodejs"></i>,
          <i className="icon-tech-expressjs"></i>
        ],
        2: [
          <i className="icon-tech-angular"></i>,
          <i className="icon-tech-javascript"></i>,
          <i className="icon-tech-mysql"></i>,
          <i className="icon-tech-nodejs"></i>,
          <i className="icon-tech-expressjs"></i>
        ],
        3: [
          <i className="icon-tech-angular"></i>,
          <i className="icon-tech-javascript"></i>,
          <i className="icon-tech-mongo"></i>,
          <i className="icon-tech-nodejs"></i>,
          <i className="icon-tech-expressjs"></i>
        ]
      },
      description: {
        0: 'A platform to bring local hairstylists directly to the user\'s door and manage appointment bookings.'
      }
    };

    {return project !== null && <div className="project-info">
      <span className="project-info-title">{projectData.title[project]}</span>
      <img src={projectData.image[project]}/>
      <div className="project-info-icons">
        {projectData.icons[project]}
      </div>
      <div className="project-info-content-wrapper">
        <span className="project-info-description">
          {projectData.description[project]}
        </span>
        <span className="project-info-github">Github</span>
      </div>
    </div>}
  }
}

export default onClickOutside(ProjectInfo);