import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage } = this.props;
    return (
      <div className="contact-container">
        <a name="contact"></a>
        <p className="section-title">Contact.</p>
        <input
          value={name}
          placeholder="Name"
          onChange={e => changeName(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          onChange={e => changeEmail(e.target.value)}
        />
        <textarea
          placeholder="Type a message..."
          value={body}
          onChange={e => changeBody(e.target.value)}
        >
        </textarea>
        <div onClick={sendMessage}>Submit</div>
      </div>
    );
  }
}