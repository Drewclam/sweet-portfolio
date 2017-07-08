import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import recipely from '../images/recipely-home.png';

export default class Projects extends Component {
  render() {
    const { renderModal, hideModal, project }  = this.props;

    return (
      <div className="projects-container">
        <a name="projects"></a>
        <p className="section-title">Projects.</p>
        <div className="projects-wrapper">
          <div className="project project-left" onClick={() => renderModal(0)}>
            <span className="project-title">It's Cut Time</span>
            <img className="project-thumb" src="https://puu.sh/wuo5m/5a47b0c5a4.png" alt="" />
          </div>
          <div className="project project-right" onClick={() => renderModal(1)}>
            <span className="project-title">Recipely</span>
            <img className="project-thumb" src={recipely} alt="" />
          </div>
          <div className="project project-left" onClick={() => renderModal(2)}>
            <span className="project-title">FindAHike</span>
            <img className="project-thumb" src="https://puu.sh/wuqvb/e8ca156dd4.png" alt="" />
          </div>
          <div className="project project-right" onClick={() => renderModal(3)}>
            <span className="project-title">ng-Challenge</span>
            <img className="project-thumb" src="https://puu.sh/wniMK/5730fe753f.png" alt="" />
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