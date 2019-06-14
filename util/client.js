const Client = require('@line/bot-sdk').Client
const config = require('./config')

const clientConfig = {
  channelAccessToken: config.CHANNEL_ACCESS_TOKEN,
  channelSecret: config.CHANNEL_SECRET,
}

const getClient = () => new Client(clientConfig)

module.exports = {
  getClient,
  clientConfig,
}
