require('dotenv').config()
const Client = require('@line/bot-sdk').Client

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}

const getClient = () => new Client(config)

module.exports = {
  getClient,
  config,
}
