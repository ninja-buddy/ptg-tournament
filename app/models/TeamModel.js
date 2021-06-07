const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    membersCount: {
      type: Schema.Types.Number,
      default: 5
    },
    playersList: {
      type: Schema.Types.Mixed
      // []
      // id
      // name
      // price
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