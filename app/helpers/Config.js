module.exports = {
  mongo: {
    url: process.env.MONGO_URL || '',
    username: process.env.MONGO_USERNAME || '',
    password: process.env.MONGO_PASSWORD || '',
    dbName: process.env.MONGO_DB_NAME || '',
    schemas: {
      playerData: 'player_data',
      matchData: 'match_data',
      tournamentData: 'tournament_data',
      auctionData: 'auction_data'
    }
  }
};