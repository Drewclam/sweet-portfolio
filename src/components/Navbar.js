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