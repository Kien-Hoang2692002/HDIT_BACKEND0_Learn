const express = require('express'); //common js
const path = require('path'); //common js
require('dotenv').config();
//import express from 'express';

const app = express();
const port = process.env.PORT || 8081; // port to connect
const hostname = process.env.HOST_NAME; // port to connect

// Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Khai báo routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/kien', (req, res) => {
  //res.send('<h1>Check kien</h1>');
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
