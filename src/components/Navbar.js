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
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }

}

export default Navbar;