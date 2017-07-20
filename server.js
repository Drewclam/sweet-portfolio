const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 80;
const account = require('./config.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  const mailOptions = {
    to: account.user,
    subject: req.body.name + ' from: ' + req.body.email,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, (err, info) => err ? res.json(err) : res.json(info.response));
});

app.listen(port, () => console.log('App listening on port ', port));