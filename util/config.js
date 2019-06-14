require('dotenv').config()

const getEnv = name => {
  if (!process.env[name]) {
    throw new Error(`Missing variable: ${name}`)
  }
  return process.env[name]
}

module.exports = {
  CHANNEL_ACCESS_TOKEN: getEnv('CHANNEL_ACCESS_TOKEN'),
  CHANNEL_SECRET: getEnv('CHANNEL_SECRET'),
  TEST_USER_ID: getEnv('TEST_USER_ID'),
  AIRTABLE_API_KEY: getEnv('AIRTABLE_API_KEY'),
  AIRTABLE_BASE: getEnv('AIRTABLE_BASE'),
}
