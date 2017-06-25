import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <img src={this.props.url} />
    );
  }

}

export default Navbar;