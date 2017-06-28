import React, { Component } from 'react';

import picture from '../Bitmap.png';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <a name="about"></a>
        <span>Tech</span>
        <img className="profile-pic" src={picture} />
        <div className="about-blurb-container">
          <h1>Hello.</h1><p>Hi! My name is Andrew. I'm a full-stack JavaScript software engineer. Ever since I was a kid I loved playing video games. Developing this passion into a programming career was a natural transition for me. Even now I'm still an avid gamer (ranked top 1% in League of Legends)! Recently, I've collaborated on projects using frameworks such as Angular 4, AngularJS, React and React Native. On the back-end I'm experienced with using Node.js, Express.js, MySQL and MongoDB. If you are looking for a talented and dedicated JavaScript engineer, <a href="#contact">reach out!</a></p>
        </div>
      </div>
    );
  }
}
          // <div className="about-tech-container">
          //   <li className="about-tech">React.js</li>
          //   <li className="about-tech">Angular 4</li>
          //   <li className="about-tech">AngularJS</li>
          //   <li className="about-tech">Node.js + Express.js</li>
          //   <li className="about-tech">MySQL</li>
          //   <li className="about-tech">MongoDB</li>
          // </div>

          // TECH STACK: Angular 4, AngularJS, React and React Native. I am experienced with Node.js and Express.js backend technologies and MongoDB, MySQL and Postgres databases.