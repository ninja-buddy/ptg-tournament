const express = require('express'),
      app = express();
const PlayerRoutes = require('./PlayerRoutes'),
      MatchRoutes = require('./MatchRoutes'),
      TournamentRoutes = require('./TournamentRoutes'),
      AuctionRoutes = require('./AuctionRoutes');

app.use('/player/', PlayerRoutes);
app.use('/match/', MatchRoutes);
app.use('/tournament/', TournamentRoutes);
app.use('/auction/', AuctionRoutes);

module.exports = app;