import React, { Component } from 'react';
import { SocialIcon } from '../../node_modules/react-social-icons/lib/react-social-icons.js';

export default class SocialMedia extends Component {
  render() {
    const socialUrls = [
      'https://www.facebook.com/DrewCLam',
      'https://www.linkedin.com/in/drewclam',
      'https://github.com/drewclam'
    ];

    return (
      <div className="social-media-container">
        {socialUrls.map(url =>
          <div className="social-media-item">
            <SocialIcon
              url={url}
              color="white"
              style={{ height: 35, width: 35 }}
            />
          </div>
        )}
      </div>
    );
  }
}