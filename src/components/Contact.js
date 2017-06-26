import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { changeName, changeEmail, changePhone, changeBody, sendMessage } = this.props;
    return (
      <div>
        <h1>Contact</h1>
        <h4>Name</h4><input onChange={(e) => changeName(e.target.value)} />
        <h4>Email</h4><input onChange={(e) => changeEmail(e.target.value)} />
        <h4>Phone#</h4><input onChange={(e) => changePhone(e.target.value)} />
        <textarea placeholder="body" onChange={(e) => changeBody(e.target.value)}></textarea>
        <div onClick={sendMessage}>Submit</div>
      </div>
    );
  }
}