import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      body: '',
      height: 0,
      project: null,
      isSending: false,
      sent: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.changeHeight());
  }

  changeHeight(height = window.pageYOffset) {
    this.setState({height});
    console.log(this.state.height);
  }

  changeName(name) {
    this.setState({name});
  }

  changeEmail(email) {
    this.setState({email});
  }

  changeBody(body) {
    this.setState({body});
  }

  changeMessageState() {
    this.setState({sent: true});
  }

  changeIsSending() {
    this.setState({isSending: true});
  }

  renderModal(id) {
    this.setState({project: id});
  }

  hideModal() {
    this.setState({project: null});
  }

  sendMessage(e) {
    // stop page reloading
    e.preventDefault();

    this.changeIsSending();

    axios({
      method: 'post',
      url: '/contact',
      headers: {'Content-Type': 'application/json'},
      data: {
        name: this.state.name,
        email: this.state.email,
        text: this.state.body
      }
    })
    .then(res => {
      this.changeName('');
      this.changeEmail('');
      this.changeBody('');
      this.changeMessageState();
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App" id="app-container">
        {this.state.project !== null && <div className="app-open-modal" onClick={this.hideModal}></div>}
          <Header />
          <Navbar
            height={this.state.height}
            changeHeight={this.changeHeight.bind(this)}
          />
          <About changeHeight={this.changeHeight.bind(this)} />
          <TechStack />
          <Projects
            renderModal={this.renderModal.bind(this)}
            hideModal={this.hideModal.bind(this)}
            project={this.state.project}
          />
          <Contact
            name={this.state.name}
            email={this.state.email}
            body={this.state.body}
            isSending={this.state.isSending}
            sent={this.state.sent}
            changeName={this.changeName.bind(this)}
            changeEmail={this.changeEmail.bind(this)}
            changeBody={this.changeBody.bind(this)}
            sendMessage={this.sendMessage.bind(this)}
          />
      </div>
    );
  }
}

export default App;
