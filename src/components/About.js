import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <a name="about"></a>
        <img className="profile-pic" src={this.props.url} />
        <div className="about-text-container">
          <h1 className="about-header">About</h1>
          <p className="about-blurb">
            My name is Andrew Lam. I am a full-stack JavaScript web developer who loves working with Angular 4, AngularJS, React and React Native front-end frameworks. I am experienced with Node.js and Express.js backend technologies and MongoDB, MySQL and Postgres databases. If you are looking for a talented and dedicated JavaScript engineer, reach out!
          </p>
        </div>
      </div>
    );
  }
}