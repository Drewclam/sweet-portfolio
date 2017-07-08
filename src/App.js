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
      name: null,
      email: null,
      phone: null,
      body: null,
      height: 0,
      project: null,
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

  changePhone(phone) {
    this.setState({phone});
  }

  changeBody(body) {
    this.setState({body});
  }

  changeMessageState() {
    this.setState({sent: true});
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

    const message = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      text: this.state.body
    };

    axios({
      method: 'post',
      url: '/contact',
      headers: {'Content-Type': 'application/json'},
      data: message
    })
    .then(res => {
      console.log(res);
      this.changeName(null);
      this.changeEmail(null);
      this.changeBody(null);
      this.changeMessageState();
      console.log(this.state);
    })
    .catch(err => console.log(err, message));
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
            phone={this.state.phone}
            body={this.state.body}
            sent={this.state.sent}
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
