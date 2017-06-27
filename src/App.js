import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      body: ''
    }
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
    const displayPictureUrl = 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/19420494_10212759759449398_1377538664024453148_n.jpg?oh=b52009b23233708b36e17bde5c492b50&oe=59D8BBA5';
    return (
      <div className="App">
        <Navbar url={displayPictureUrl} />
        <About />
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
