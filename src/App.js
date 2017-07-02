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
    const techUrls = [
    'https://material.angularjs.org/latest/img/logo.svg',
    'https://camo.githubusercontent.com/d18a06dffe0778d6be8b91f4e0cd5a18d5287063/687474703a2f2f7777772e6e6967656c736d6974682e636f2f696d616765732f72656163746a732e706e67',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    'http://nodejs-cloud.com/img/128px/expressjs.png',
    'https://camo.githubusercontent.com/6effdb8103365043944db7a341e91ffe2fc234e5/68747470733a2f2f63646e2e7261776769742e636f6d2f706564726f6d616c74657a2f747970657363726970742d6c6f676f2d72656372656174696f6e2f6d61737465722f6c6f676f732f747970657363726970742d636f6c6f722d6c6f676f2e737667',
    'https://www.seeklogo.net/wp-content/uploads/2015/10/mongodb-logo-vector-download.jpg',
    'http://mongodb-tools.com/img/mongoose.png',
    'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
    'http://owen28299.github.io/digital-cv/css/languages/sequelize.png',
    'http://help.plot.ly/static/images/database-connectors/logos/postgres.png',
    'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png',
    'https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png',
    'https://seeklogo.com/images/G/grunt-logo-E890D57A06-seeklogo.com.png',
    'http://www.k9ventures.com/wp-content/uploads/2015/06/uNw6TMXOSe-3000x3000.png',
    'http://www.seeicons.com/images/iconstore/512/seeicons__57e90b703eba6.png',
    'https://cldup.com/xFVFxOioAU.svg',
    'https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67',
    'https://static3.bocoup.com/assets/2015/11/02224553/backbone-feat-500x375.png'];

    return (
      <div className="App" id="container" onScroll={this.changeHeight}>
        <Header />
        <Navbar
          height={this.state.height}
        />
        <About changeHeight={this.changeHeight.bind(this)} />
        <TechStack techUrls={techUrls} />
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
