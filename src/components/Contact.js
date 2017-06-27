import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage } = this.props;
    return (
      <div>
        <a name="contact"></a>
        <h1>Contact</h1>
        <h4>Name</h4>
        <input
          value={name}
          onChange={e => changeName(e.target.value)}
        />
        <h4>Email</h4>
        <input
          value={email}
          onChange={e => changeEmail(e.target.value)}
        />
        <h4>Phone#</h4>
        <input
          value={phone}
          onChange={e => changePhone(e.target.value)}
        />
        <textarea
          placeholder="body"
          value={body}
          onChange={e => changeBody(e.target.value)}
        >
        </textarea>
        <div onClick={sendMessage}>Submit</div>
      </div>
    );
  }
}