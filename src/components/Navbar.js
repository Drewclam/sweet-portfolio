import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { height } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <a href="#about">
            <div className="nav-outer">
              {height <= 605 && <div className="nav-inner"></div>}
            </div>
          </a>
          <a href="#tech">
            <div className="nav-outer">
              {height > 605 && height <= 1551 && <div className="nav-inner"></div>}
            </div>
          </a>
          <a href="#projects">
            <div className="nav-outer">
              {height > 1551 && height <= 2500 && <div className="nav-inner"></div>}
            </div>
          </a>
          <a href="#contact">
            <div className="nav-outer">
              {height > 2500 && <div className="nav-inner"></div>}
            </div>
          </a>
        </div>
      </div>
    );
  }
}