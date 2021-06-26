const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const TournamentSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    teamSize: {
      type: Schema.Types.Number
    },
    auctionData: {
      budgetPerTeam: {
        type: Schema.Types.Number
      },
      captains: {
        type: Schema.Types.Mixed
      },
      players: {
        type: Schema.Types.Mixed
      }
      // []
      // player id
      // player name
      // team id
      // team name
      // price
    },
    status: {
      type: Schema.Types.String
      // STARTED, IN_PROGRESS, COMPLETED, STOPPED
    },
    winner: {
      type: Schema.Types.ObjectId,
      ref: Config.mongo.schemas.teamData
    },
    remarks: {
      type: Schema.Types.String
    }
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