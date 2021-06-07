const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    basePrice: {
      type: Schema.Types.Number,
      default: 15
    },
    leagueLevel: {
      type: Schema.Types.String
    },
    isAvailable: {
      type: Schema.Types.Boolean,
      default: false
    },
    previousTeams: {
      type: Schema.Types.Mixed
      // []
      // team id
      // team name
    },
    captainCount: {
      type: Schema.Types.Number
    },
    highestAuctionPrice: {
      type: Schema.Types.Number
    },
    lastAuctionPrice: {
      type: Schema.Types.Number
    }
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