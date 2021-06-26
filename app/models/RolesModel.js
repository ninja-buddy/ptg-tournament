const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      { Config } = require('../helpers');

const RolesSchema = new mongoose.Schema(
  {
    code: {
      type: Schema.Types.String,
      enum: [
        
      ]
    },
    title: {
      type: Schema.Types.String
    },    
    permissions: {
      user: {
        view: {
          type: Schema.Types.Boolean,
          default: false
        },
        add: {
          type: Schema.Types.Boolean,
          default: false
        },
        delete: {
          type: Schema.Types.Boolean,
          default: false
        },
        modify: {
          type: Schema.Types.Boolean,
          default: false
        }
      },
      auction: {
        view: {
          type: Schema.Types.Boolean,
          default: false
        },
        add: {
          type: Schema.Types.Boolean,
          default: false
        },
        delete: {
          type: Schema.Types.Boolean,
          default: false
        },
        modify: {
          type: Schema.Types.Boolean,
          default: false
        },
        bid: {
          type: Schema.Types.Boolean,
          default: false
        }
      },
      team: {
        view: {
          type: Schema.Types.Boolean,
          default: false
        },
        add: {
          type: Schema.Types.Boolean,
          default: false
        },
        delete: {
          type: Schema.Types.Boolean,
          default: false
        },
        modify: {
          type: Schema.Types.Boolean,
          default: false
        }
      },
      match: {
        view: {
          type: Schema.Types.Boolean,
          default: false
        },
        add: {
          type: Schema.Types.Boolean,
          default: false
        },
        delete: {
          type: Schema.Types.Boolean,
          default: false
        },
        modify: {
          type: Schema.Types.Boolean,
          default: false
        }
      },
      player: {
        view: {
          type: Schema.Types.Boolean,
          default: false
        },
        add: {
          type: Schema.Types.Boolean,
          default: false
        },
        delete: {
          type: Schema.Types.Boolean,
          default: false
        },
        modify: {
          type: Schema.Types.Boolean,
          default: false
        }
      },
    },
  },
  {
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    collection: Config.mongo.schemas.rolesData,
    toJSON: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model(Config.mongo.schemas.rolesData, RolesSchema);