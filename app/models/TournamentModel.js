const mongoose = require('mongoose'),
      { Config } = require('../helpers');

const TournamentSchema = new mongoose.Schema(
  {
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.tournamentData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.tournamentData, TournamentSchema);