const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const MatchSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    type: {
      type: Schema.Types.String
    },
    scoreLimit: {
      type: Schema.Types.Number
    },
    teamOneData: {
      id: {
        type: Schema.Types.ObjectId,
        ref: Config.mongo.schemas.teamData
      },
      totalScore: {
        type: Schema.Types.Number
      },
      individualScores: {
        type: Schema.Types.Mixed
      }
    },
    teamTwoData: {
      id: {
        type: Schema.Types.ObjectId,
        ref: Config.mongo.schemas.teamData
      },
      totalScore: {
        type: Schema.Types.Number
      },
      individualScores: {
        type: Schema.Types.Mixed
        // []
        // player id
        // player name
        // kills
        // deaths
        // assist
      }
    },
    result: {
      type: Schema.Types.String
    },
    wonBy: {
      type: Schema.Types.ObjectId,
      ref: Config.mongo.schemas.teamData
    },
    remarks: {
      type: Schema.Types.String
    },
    tournament: {
      type: Schema.Types.ObjectId,
      ref: Config.mongo.schemas.tournamentData
    }
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