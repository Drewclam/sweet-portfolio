import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';

export default class Navbar extends Component {
  render() {
    const { height } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="nav-outer" onClick={() => smoothScroll(0)}>
            {height <= 605 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(780)}>
            {height > 605 && height <= 1100 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(1561)}>
            {height > 1100 && height <= 2300 && <div className="nav-inner"></div>}
          </div>
          <div className="nav-outer" onClick={() => smoothScroll(2700)}>
            {height > 2300 && <div className="nav-inner"></div>}
          </div>
        </div>
      </div>
    );
  }
}