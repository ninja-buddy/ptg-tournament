const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const AuctionSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    playersData: {
      type: Schema.Types.Mixed
      // []
      // player id
      // player name
      // team name
      // price
    },
    budgetPerTeam: {
      type: Schema.Types.Number
    },
    status: {
      type: Schema.Types.String
      // STARTED, IN_PROGRESS, COMPLETED
    }
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