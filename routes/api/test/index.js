const app = require('../../../util/app')
const { getClient } = require('../../../util/client')
const config = require('../../../util/config')
const { getRandomResponse } = require('../../../util/responses')

const client = getClient()
const userId = config.TEST_USER_ID

app.get('*', async (req, res) => {
  const response = await getRandomResponse()
  await client.pushMessage(userId, { type: 'text', text: response })

  res.end('Sent!')
})

module.exports = app
