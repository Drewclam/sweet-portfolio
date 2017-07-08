import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage } = this.props;
    return (
      <div className="contact-container">
        <a name="contact"></a>
        <p className="section-title">Contact.</p>
        <div className="contact-message-wrapper">
          <div className="contact-message-meta">
            <input
              className="contact-message-name"
              value={name}
              placeholder="Name"
              onChange={e => changeName(e.target.value)}
            />
            <input
              className="contact-message-email"
              value={email}
              placeholder="Email"
              onChange={e => changeEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Type a message..."
            value={body}
            onChange={e => changeBody(e.target.value)}
          >
          </textarea>
          <div onClick={sendMessage}>Submit</div>
        </div>
      </div>
    );
  }
}