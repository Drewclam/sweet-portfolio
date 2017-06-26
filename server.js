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

  const mailOptions = {
    from: 'testSender@gmail.com',
    to: account.user,
    subject: 'Test subject',
    text: 'hello world'
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.json({yo: 'error'});
    } else {
      res.json({yo: info.response});
    }
  });
});

app.listen(port, () => console.log('App listening on 1337.'));