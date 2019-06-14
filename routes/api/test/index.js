const app = require('../../../util/app')
const { getClient } = require('../../../util/client')

const client = getClient()
const userId = process.env.TEST_USER_ID

app.get('*', async (req, res) => {
  await client.pushMessage(userId, { type: 'text', text: 'hello, world' })
  res.end('pushed!')
})

module.exports = app
