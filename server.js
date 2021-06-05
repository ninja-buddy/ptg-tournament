const express = require('express'),
      path = require('path'),
      env = require('dotenv').config(),
      app = express(),
      mongo = require('./app/helpers/Mongo'),
      PORT = process.env.SERVER_PORT || 6666;

const routes = require('./app/routes');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/ptgTournament/', routes);

app.get('*', (req, res) => {
  res.header('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`PTG Tournament node server is listening on port ${PORT}!`);
});