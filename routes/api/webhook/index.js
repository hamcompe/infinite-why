const app = require('../../../util/app')
const { getClient, clientConfig } = require('../../../util/client')
const { getRandomResponse } = require('../../../util/responses')
const middleware = require('@line/bot-sdk').middleware
const JSONParseError = require('@line/bot-sdk').JSONParseError
const SignatureValidationFailed = require('@line/bot-sdk')
  .SignatureValidationFailed

const client = getClient()

app.use(middleware(clientConfig))
app.use((err, req, res, next) => {
  if (err instanceof SignatureValidationFailed) {
    console.log('error', err)
    res.status(401).send(err.signature)
    return
  } else if (err instanceof JSONParseError) {
    console.log('error', err)
    res.status(400).send(err.raw)
    return
  }
  next(err) // will throw default 500
})

app.post('*', async (req, res) => {
  const event = req.body.events[0]
  if (event.type === 'message') {
    const message = event.message

    if (message.type === 'text') {
      const response = await getRandomResponse()
      await client.replyMessage(event.replyToken, {
        type: 'text',
        text: response,
      })
    }
  }

  res.json(req.body.events) // req.body will be webhook event object
})

module.exports = app
