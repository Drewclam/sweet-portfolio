import React, { Component } from 'react';

import picture from '../picture.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <a name="about"></a>
        <h1 className="about-header">About</h1>
        <img className="profile-pic" src={picture} />
        <div className="about-info-container">
          <p className="about-blurb">
            My name is Andrew Lam. I am a full-stack JavaScript web developer who loves working with Angular 4, AngularJS, React and React Native front-end frameworks. I am experienced with Node.js and Express.js backend technologies and MongoDB, MySQL and Postgres databases. If you are looking for a talented and dedicated JavaScript engineer, reach out!
          </p>
          <div className="about-tech-container">
            <li className="about-tech">React.js</li>
            <li className="about-tech">Angular 4</li>
            <li className="about-tech">AngularJS</li>
            <li className="about-tech">Node.js + Express.js</li>
            <li className="about-tech">MySQL</li>
            <li className="about-tech">MongoDB</li>
          </div>
        </div>
      </div>
    );
  }
}