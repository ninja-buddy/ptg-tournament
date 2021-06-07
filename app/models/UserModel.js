const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    role: {
      type: Schema.Types.String
      // ADMIN, MANAGER, PLAYER
    },
    username: {
      type: Schema.Types.String
    },
    password: {
      type: Schema.Types.String
    }
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.userData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.userData, UserSchema);