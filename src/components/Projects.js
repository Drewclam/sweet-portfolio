import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import itsCutTime from '../images/itsCutTime-thumb.png';
import recipely from '../images/recipely-thumb.png';
import findAHike from '../images/findAHike-thumb.png';
import ngChallenge from '../images/ngChallenge-thumb.png';


export default class Projects extends Component {
  render() {
    const { renderModal, hideModal, project }  = this.props;

    return (
      <div className="projects-container">
        <p className="section-title">Projects.</p>
        <div className="projects-wrapper">
          <div className="project project-left" onClick={() => renderModal(0)}>
            <span className="project-title">It's Cut Time</span>
            <img className="project-thumb" src={itsCutTime} alt="" />
          </div>
          <div className="project project-right" onClick={() => renderModal(1)}>
            <span className="project-title">Recipely</span>
            <img className="project-thumb" src={recipely} alt="" />
          </div>
          <div className="project project-left" onClick={() => renderModal(2)}>
            <span className="project-title">FindAHike</span>
            <img className="project-thumb" src={findAHike} alt="" />
          </div>
          <div className="project project-right" onClick={() => renderModal(3)}>
            <span className="project-title">ng-Challenge</span>
            <img className="project-thumb" src={ngChallenge} alt="" />
          </div>
        </div>
        <ProjectInfo
          hideModal={hideModal}
          project={project}
        />
      </div>
    );
  }
}