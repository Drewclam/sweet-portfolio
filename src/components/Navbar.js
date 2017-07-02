import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { changeCurrentPage, height } = this.props;
    return (
      <div className="navbar-container">
        <a href="#about" onClick={() => changeCurrentPage('about')}>
          <div className="nav-outer">
            {height >= 0 && height <= 605 && <div className="nav-inner"></div>}
          </div>
        </a>
        <a href="#tech">
          <div className="nav-outer">
            {height >= 605 && height <= 6511 && <div className="nav-inner"></div>}
          </div>
        </a>
        <a href="#projects"><div className="nav-outer"></div></a>
        <a href="#contact"><div className="nav-outer"></div></a>
      </div>
    );
  }
}