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
        <div>
          <h3>Recipely</h3>
          <span><h4>Summary</h4>A mobile app that utilizes the phone's camera to generate recipes with food in the pictures you take.</span>
          <span><h4>Notable Technologies</h4>Built with React Native, Postgres, Node.js, Express.js, Expo</span>
          <div>
            <img src="https://puu.sh/wupPV/83885fc8cf.png" />
          </div>
        </div>
      </div>
    );
  }
}