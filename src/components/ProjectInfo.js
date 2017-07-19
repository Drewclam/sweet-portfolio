import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import itsCutTime1 from '../images/itsCutTime1.png';
import recipely1 from '../images/recipely1.png';
import findAHike1 from '../images/findAHike1.png';
import ngChallenge1 from '../images/ngChallenge1.png';
import Octicon from 'react-octicon';

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
        0: itsCutTime1,
        1: recipely1,
        2: findAHike1,
        3: ngChallenge1
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
        0: 'A communication platform for users to connect with hairstylists in their area. Find a stylist that\'s right for you in your vicinity. Message them and book your appointment through our web-app. See confirmation when the stylist has accepted your booking and are on their way to your location!',
        1: 'Recipely uses pictures taken with your phone and detects the food within! Recipes are generated which contain those specific foods in them for discovering new recipes to create just with the food at hand.',
        2: 'A web-app powered by the Trail API. Discover hiking trails near your location! Keep track of hikes you have completed or save hikes for later on your wish-list. Provided is a Google map of the hike and its surrounding area for your reference.',
        3: 'A one-click app to gather and display League of Legends Challenger tier player data. Help players see what the professionals are playing right now and make informed decisions on what champions to play next. View Challenger players\' frequently used champions, total wins and losses or their total win-loss ratio.'
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
      <img className="project-info-image" src={projectData.image[project]} />
      <div className="project-info-icons">{projectData.icons[project]}</div>
      <div className="project-info-content-wrapper">
        <span className="project-info-description">{projectData.description[project]}</span>
        <a className="project-info-github octicon octicon-logo-github" href={projectData.gitHub[project]}></a>
      </div>
    </div>}
  }
}

export default onClickOutside(ProjectInfo);