import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    this.props.sendMessage();
    return (
      <h1>Contact</h1>
    );
  }
}