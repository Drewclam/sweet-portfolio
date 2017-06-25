import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    const displayPictureUrl = 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/19420494_10212759759449398_1377538664024453148_n.jpg?oh=b52009b23233708b36e17bde5c492b50&oe=59D8BBA5';
    return (
      <div className="App">
        <Navbar url={displayPictureUrl} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
