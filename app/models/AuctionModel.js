const mongoose = require('mongoose'),
      { Config } = require('../helpers');

const AuctionSchema = new mongoose.Schema(
  {
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.AuctionData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.AuctionData, AuctionSchema);