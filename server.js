const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 1337;
const account = require('./config.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  console.log('fdf', req.body);
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: account.user,
    subject: req.body.name,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, (err, info) =>
    err ? res.json({yo: 'error'}) : res.json({yo: info.response}))
});

app.listen(port, () => console.log('App listening on 1337.'));