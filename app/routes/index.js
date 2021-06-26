const express = require('express'),
      app = express();
const PlayerRoutes = require('./PlayerRoutes'),
      TeamRoutes = require('./TeamRoutes'),
      MatchRoutes = require('./MatchRoutes'),
      UserRoutes = require('./UserRoutes'),
      TournamentRoutes = require('./TournamentRoutes');

app.use('/user/', UserRoutes);
app.use('/player/', PlayerRoutes);
app.use('/team/', TeamRoutes);
app.use('/match/', MatchRoutes);
app.use('/tournament/', TournamentRoutes);

module.exports = app;