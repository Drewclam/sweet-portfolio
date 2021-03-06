import React, { Component } from 'react';

import picture from '../images/Bitmap.png';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img className="profile-pic" src={picture} alt="" />
        <div className="about-blurb-container">
          <p className="section-title about-title">Hello.</p><p className="blurb-content">Hi! My name is Andrew. I'm a JavaScript software engineer. I'm passionate about Angular 4, AngularJS, React and React Native. I love building applications both from the front or back. Want to check out what I've been working on? Check me out on github!</p>
        </div>
      </div>
    );
  }
}