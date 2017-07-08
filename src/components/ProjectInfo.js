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
        1: 'https://puu.sh/wDoSw/c1ac86fc12.png',
        2: 'https://puu.sh/wuqxK/846b3e0b54.png',
        3: 'https://puu.sh/wuqGE/5c74da951e.png'
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
        0: 'A platform to bring local hairstylists directly to the user\'s door and manage appointment bookings.',
        1: 'A mobile app that utilizes the phone\'s camera to generate recipes with food in the pictures you take.',
        2: 'A web-app powered by the Trail API. Discover hiking trails near you, track completed hikes or save them on a wishlist for later.',
        3: 'A tool for League of Legends enthusiasts to track win/loss ratios on challenger-tier players.'
      },
      gitHub: {
        0: 'https://github.com/oxford-commas/dingdong-its-cut-time',
        1: 'https://github.com/findahike/recipely',
        2: 'https://github.com/findahike/findahike',
        3: 'https://github.com/Drewclam/ng-Challenge'
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
        <a className="project-info-github" href={projectData.gitHub[project]}>Github</a>
      </div>
    </div>}
  }
}

export default onClickOutside(ProjectInfo);