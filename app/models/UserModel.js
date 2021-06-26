const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      {
        Config,
        Constants
      } = require('../helpers');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String
    },
    role: {
      type: Schema.Types.String,
      default: Constants.roles.player
      // ADMIN, MANAGER, PLAYER, CAPTAIN
    },
    username: {
      type: Schema.Types.String
    },
    password: {
      type: Schema.Types.String
    },
    userLogo: { // Base64 string
      type: Schema.Types.String,
      default: ''
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