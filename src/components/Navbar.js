import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { changeCurrentPage } = this.props;
    return (
      <div className="navbar-container">
        <a href="#about" onClick={() => changeCurrentPage('about')}><div className="nav-about"></div></a>
        <a href="#tech"><div className="nav-tech"></div></a>
        <a href="#projects"><div className="nav-projects"></div></a>
        <a href="#contact"><div className="nav-contact"></div></a>
      </div>
    );
  }
}