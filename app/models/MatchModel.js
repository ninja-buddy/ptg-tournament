const mongoose = require('mongoose'),
      { Config } = require('../helpers');

const MatchSchema = new mongoose.Schema(
  {
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.matchData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.matchData, MatchSchema);