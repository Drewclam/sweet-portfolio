import React, { Component } from 'react';
import Footer from './Footer';
import Loading from 'react-loading-animation';

export default class Contact extends Component {
  render() {
    const { name, email, body, changeName, changeEmail, changeBody, sendMessage, isSending, sent } = this.props;
    return (
      <div className="contact-container">
        <p className="section-title alt-section-title">Contact.</p>
        <form onSubmit={sendMessage} className="contact-message-wrapper">
          <div className="contact-message-meta">
            <input
              className="contact-message-name"
              value={name}
              placeholder="Name"
              onChange={e => changeName(e.target.value)}
              disabled={sent===true}
              required
            />
            <input
              className="contact-message-email"
              value={email}
              placeholder="Email"
              onChange={e => changeEmail(e.target.value)}
              disabled={sent===true}
              required
            />
          </div>
          <textarea
            className="contact-message-body"
            placeholder="type a message..."
            value={body}
            onChange={e => changeBody(e.target.value)}
            disabled={sent===true}
            required
          >
          </textarea>
          <div className="contact-message-submit-wrapper">
            {sent
              ? <div className="contact-message-submit-confirmation">Sent. Thank you!</div>
              : (isSending
                  ? <div className="contact-message-submit-pending"><Loading /></div>
                  : <input className="contact-message-submit-btn" type="submit" value="Send" />
                )
            }
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}