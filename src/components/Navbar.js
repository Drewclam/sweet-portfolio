import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={this.props.url} />
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    );
  }

}

export default Navbar;