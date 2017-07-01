import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VisibilitySensor from '../node_modules/react-visibility-sensor';
import TrackVisibility from '../node_modules/react-on-screen'; // CommonJs : require('react-on-screen').default

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      body: '',
      height: 0
    }
  }

  componentDidMount() {
     window.addEventListener('scroll', () => this.changeHeight());
  }

  changeHeight() {
    this.setState({height: window.pageYOffset});
    console.log(this.state.height);
  }

  changeName(name) {
    this.setState({name});
  }

  changeEmail(email) {
    this.setState({email});
  }

  changePhone(phone) {
    this.setState({phone});
  }

  changeBody(body) {
    this.setState({body});
  }

  sendMessage() {
    const message = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      text: this.state.body
    };

    this.setState({
      name: '',
      email: '',
      phone: '',
      body: ''
    });

    axios({
      method: 'post',
      url: '/contact',
      headers: {'Content-Type': 'application/json'},
      data: message
    })
    .then(res => console.log(res))
    .catch(err => console.log(err, message));
  }

  render() {
    return (
      <div className="App" id="container" onScroll={this.changeHeight}>
        <Header />
        <Navbar
          height={this.state.height}
        />
        <About changeHeight={this.changeHeight.bind(this)} />
        <TechStack />
        <Projects />
        <Contact
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          body={this.state.body}
          changeName={this.changeName.bind(this)}
          changeEmail={this.changeEmail.bind(this)}
          changePhone={this.changePhone.bind(this)}
          changeBody={this.changeBody.bind(this)}
          sendMessage={this.sendMessage.bind(this)}
        />
      </div>
    );
  }
}

export default App;
