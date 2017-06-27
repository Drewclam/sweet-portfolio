import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <a name="projects"></a>
        <h1>Projects</h1>
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
            <img src="https://puu.sh/wupYC/73a98aae4a.png" />
          </div>
        </div>
        <div>
          <h3>FindAHike</h3>
          <span><h4>Summary</h4>A web-app powered by the Trail API. Discover hiking trails near you, track completed hikes or save them on a wishlist for later.</span>
          <span><h4>Notable Technologies</h4>Built with AngularJS, MySQL, Sequelize, Node.js, Express.js, Bootstrap, Trail API, Google Maps API</span>
          <div>
            <img src="https://puu.sh/wuqvb/e8ca156dd4.png" />
            <img src="https://puu.sh/wuqxK/846b3e0b54.png" />
          </div>
        </div>
        <div>
          <h3>ng-Challenge</h3>
          <span><h4>Summary</h4>A tool for League of Legends enthusiasts to track win/loss ratios on challenger-tier players.</span>
          <span><h4>Notable Technologies</h4>Built with AngularJS, MongoDB, Mongoose, Node.js, Express.js, Riot Games API</span>
          <div>
            <img src="https://puu.sh/wniMK/5730fe753f.png" />
            <img src="https://puu.sh/wuqGE/5c74da951e.png" />
          </div>
        </div>
      </div>
    );
  }
}