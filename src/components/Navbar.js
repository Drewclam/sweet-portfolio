import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={this.props.url} />
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
        <div className="social-media">
          <a href="https://www.facebook.com/DrewCLam">
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/drewclam">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/drewclam">
            <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }

}

export default Navbar;