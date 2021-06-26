const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    captain: {
      type: Schema.Types.ObjectId,
      ref: Config.mongo.schemas.playerData
    },
    players: {
      type: Schema.Types.Mixed
      // []
      // id
      // name
      // price
    },
    tournament: {
      type: Schema.Types.ObjectId,
      ref: Config.mongo.schemas.tournamentData
    },
    winCount: {
      type: Schema.Types.Number,
      default: 0
    },
    lossCount: {
      type: Schema.Types.Number,
      default: 0
    },
    tieCount: {
      type: Schema.Types.Number,
      default: 0
    },
    killCount: {
      type: Schema.Types.Number,
      default: 0
    },
    deathCount: {
      type: Schema.Types.Number,
      default: 0
    },
    assistCount: {
      type: Schema.Types.Number,
      default: 0
    }
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.teamData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.teamData, TeamSchema);