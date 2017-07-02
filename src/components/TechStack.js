import React, { Component } from 'react';

export default class TechStack extends Component {
  render() {
    const { techUrls } = this.props;
    return (
      <div className="tech-container">
        <h1>techstack</h1>
        <div className="tech-icon-wrapper">
          {techUrls.map(url => <img src={url} />)}
        </div>
      </div>
    );
  }
}