import React, { Component } from 'react';
import Loading from 'react-loading-animation';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage, isSending, sent } = this.props;
    return (
      <div className="contact-container">
        <a name="contact"></a>
        <p className="section-title">Contact.</p>
        <form onSubmit={sendMessage} className="contact-message-wrapper">
          <div className="contact-message-meta">
            <input
              className="contact-message-name"
              value={name}
              placeholder="Name"
              onChange={e => changeName(e.target.value)}
              required
            />
            <input
              className="contact-message-email"
              value={email}
              placeholder="Email"
              onChange={e => changeEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            className="contact-message-body"
            placeholder="type a message..."
            value={body}
            onChange={e => changeBody(e.target.value)}
            required
          >
          </textarea>
          <div className="contact-message-submit-wrapper">
            {sent
              ? <div className="contact-message-submit-confirmation">Sent. Thank you!</div>
              : (isSending
                  ? <Loading />
                  : <input className="contact-message-submit-btn" type="submit" />
                )
            }
          </div>
        </form>
      </div>
    );
  }
}