const express = require('express'),
      app = express();
const PlayerRoutes = require('./PlayerRoutes'),
      TeamRoutes = require('./TeamRoutes'),
      MatchRoutes = require('./MatchRoutes'),
      UserRoutes = require('./UserRoutes'),
      AuctionRoutes = require('./AuctionRoutes');

app.use('/user/', UserRoutes);
app.use('/player/', PlayerRoutes);
app.use('/team/', TeamRoutes);
app.use('/match/', MatchRoutes);
app.use('/auction/', AuctionRoutes);

module.exports = app;