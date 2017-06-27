import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <span className="nav-home">Home</span>
        <span className="nav-about"><a href="#about">About</a></span>
        <span className="nav-projects"><a href="#projects">Projects</a></span>
        <span className="nav-contact"><a href="#contact">Contact</a></span>
      </div>
    );
  }
}
        // <img className="profile-pic" src={this.props.url} />
        // <div className="social-media-container">
        //   <a href="https://www.facebook.com/DrewCLam">
        //     <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
        //   </a>
        //   <a href="https://www.linkedin.com/in/drewclam">
        //     <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
        //   </a>
        //   <a href="https://github.com/drewclam">
        //     <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
        //   </a>
        // </div>