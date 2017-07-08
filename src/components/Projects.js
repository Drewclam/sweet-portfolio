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
          <div className="project" onClick={() => renderModal(0)}>
            <h3>It's Cut Time</h3>
            <img src="https://puu.sh/wuo5m/5a47b0c5a4.png" alt="" />
          </div>
          <div className="project" onClick={() => renderModal(1)}>
            <h3>Recipely</h3>
            <img src={recipely} alt="" />
          </div>
          <div className="project" onClick={() => renderModal(2)}>
            <h3>FindAHike</h3>
            <img src="https://puu.sh/wuqvb/e8ca156dd4.png" alt="" />
          </div>
          <div className="project" onClick={() => renderModal(3)}>
            <h3>ng-Challenge</h3>
            <img src="https://puu.sh/wniMK/5730fe753f.png" alt="" />
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