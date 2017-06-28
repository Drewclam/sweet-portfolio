import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { changeCurrentPage, current } = this.props;
    return (
      <div className="navbar-container">
        <a href="#about" onClick={() => changeCurrentPage('about')}>
          <div className="nav-outer">
            {current === 'about' && <div className="nav-inner"></div>}
          </div>
        </a>
        <a href="#tech">
          <div className="nav-outer">
          </div>
        </a>
        <a href="#projects"><div className="nav-outer"></div></a>
        <a href="#contact"><div className="nav-outer"></div></a>
      </div>
    );
  }
}