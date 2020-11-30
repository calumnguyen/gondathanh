const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//Confirmation for 'node index.js' or 'nodemon'
app.listen(process.env.PORT || 3000, function () {
  console.log('Port is running...');
});
