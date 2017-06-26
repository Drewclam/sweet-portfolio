const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 1337;

app.use(express.static(__dirname + '/build'));

app.listen(port, () => console.log('App listening on 1337.'));