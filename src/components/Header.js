import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <a name="about"></a>
        <span className="header-name">Andrew Lam</span>
        <div className="social-media-container">
          <a href="https://www.facebook.com/DrewCLam">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/drewclam">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/drewclam">
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}