import React, { Component } from 'react';

import picture from '../images/Bitmap.png';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img className="profile-pic" src={picture} alt="" />
        <div className="about-blurb-container">
          <p className="section-title">Hello.</p><p className="blurb-content">Hi! My name is Andrew. I'm a full-stack JavaScript software engineer. Recently, I've collaborated on projects using frameworks such as Angular 4, AngularJS, React and React Native. On the back-end I'm experienced with using Node.js, Express.js, MySQL and MongoDB. If you are looking for a talented and dedicated JavaScript engineer, <a href="#contact">reach out!</a></p>
        </div>
      </div>
    );
  }
}