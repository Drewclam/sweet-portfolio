import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <h4>Name</h4><input />
        <h4>Email</h4><input />
        <h4>Phone#</h4><input />
        <textarea placeholder="body"></textarea>
        <div onClick={this.props.sendMessage}>Submit</div>
      </div>
    );
  }
}