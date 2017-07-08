import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { name, email, phone, body, changeName, changeEmail, changePhone, changeBody, sendMessage, sent } = this.props;
    return (
      <div className="contact-container">
        <a name="contact"></a>
        <p className="section-title">Contact.</p>
        <form className="contact-message-wrapper">
          <div className="contact-message-meta">
            <input
              className="contact-message-name"
              value={name}
              placeholder="Name"
              required
              onChange={e => changeName(e.target.value)}
            />
            <input
              className="contact-message-email"
              value={email}
              placeholder="Email"
              required
              onChange={e => changeEmail(e.target.value)}
            />
          </div>
          <textarea
            className="contact-message-body"
            placeholder="type a message..."
            value={body}
            required
            onChange={e => changeBody(e.target.value)}
          >
          </textarea>
          <div className="contact-message-submit-wrapper">
            {sent ?
              <div className="contact-message-submit-confirmation">
                Sent. Thank yoasdfu!
              </div> :
              <input
                className="contact-message-submit-btn"
                type="submit"
                placeholder="asdf"
              />

              }
          </div>
        </form>
      </div>
    );
  }
}