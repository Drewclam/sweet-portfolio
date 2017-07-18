import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <span className="footer-content">Copyright 2017 Andrew Lam</span>
        <SocialMedia />
      </div>
    );
  }
}