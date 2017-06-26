import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div>
          <h3>It's Cut Time</h3>
          <span><h4>Summary</h4>A platform to bring local hairstylists directly to the user's door and manage appointment bookings.</span>
          <span><h4>Notable Technologies</h4>Built with Angular 4, TypeScript, MySQL, Node.js, Express.js, Flexbox, Stripe</span>
          <div>
            <img src="https://puu.sh/wuo5m/5a47b0c5a4.png" />
            <img src="https://puu.sh/wuo39/f19582444f.png" />
          </div>
        </div>
      </div>
    );
  }
}