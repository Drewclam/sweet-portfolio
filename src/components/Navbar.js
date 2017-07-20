import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';

export default class Navbar extends Component {
  render() {
    const { height } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="nav-outer" onClick={() => smoothScroll(0)}>
            {height <= 550 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(800)}>
            {height > 550 && height <= 1300 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(1600)}>
            {height > 1300 && height <= 2200 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(2700)}>
            {height > 2200 && <div className="nav-inner"></div>}
          </div>
        </div>
      </div>
    );
  }
}