import React, { Component } from 'react';
import checkmark from '../images/checkmark.gif';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage, sent } = this.props;
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
            className="contact-message-body"
            placeholder="type a message..."
            value={body}
            onChange={e => changeBody(e.target.value)}
          >
          </textarea>
          <div className="contact-message-submit-wrapper" onClick={sendMessage}>
            {sent ? <div className="contact-message-submit-confirmation"><img src={checkmark} />Sent</div> : <div className="contact-message-submit-btn">Submit</div>}
          </div>
        </div>
      </div>
    );
  }
}