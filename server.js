const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 1337;
const account = require('./config.js');

app.use(express.static(__dirname + '/build'));

app.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: account.user,
      pass: account.pass
    }
  });
});

app.listen(port, () => console.log('App listening on 1337.'));