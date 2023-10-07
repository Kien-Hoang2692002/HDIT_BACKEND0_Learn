const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World ABC!');
});

router.get('/kien', (req, res) => {
  //res.send('<h1>Check kien</h1>');
  res.render('sample.ejs');
});

module.exports = router;
