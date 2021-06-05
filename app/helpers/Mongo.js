const mongoose = require('mongoose'),
      { Config } = require('./../helpers');

mongoose.connect(
  Config.mongo.url,
  {
    useNewUrlParser: true,
    dbName: Config.mongo.dbName,
    // auth: {
    //   user: Config.mongo.username,
    //   password: Config.mongo.password
    // },
    autoCreate: true,
    autoIndex: false,
    bufferCommands: false,
    useUnifiedTopology: true
  }
);

mongoose.connection.on('connected', () => {
  console.log(`Connected to Mongo database '${Config.mongo.dbName}'`);
});
mongoose.connection.on('error', (error) => {
  console.log(`Connection Error with Mongo database '${Config.mongo.dbName}'. ERROR: ${error}`);
});
mongoose.connection.on('disconnected', (error) => {
  console.log(`Disconnected with Mongo database '${Config.mongo.dbName}'. ERROR: ${error}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});