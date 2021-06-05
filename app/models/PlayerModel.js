const mongoose = require('mongoose'),
      { Config } = require('../helpers');

const PlayerSchema = new mongoose.Schema(
  {
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.playerData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.playerData, PlayerSchema);