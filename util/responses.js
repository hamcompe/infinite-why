const Airtable = require('airtable')
const config = require('./config')

const base = new Airtable({ apiKey: config.AIRTABLE_API_KEY }).base(
  config.AIRTABLE_BASE,
)

async function getResponses () {
  const responses = []

  await base('responses')
    .select({
      view: 'Grid view',
    })
    .eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        responses.push(record.get('Name'))
      })
      fetchNextPage()
    })

  return responses
}

const randomInArray = arr => arr[Math.floor(Math.random() * arr.length)]

async function getRandomResponse () {
  const responses = await getResponses()
  return randomInArray(responses)
}

module.exports = { getResponses, getRandomResponse }
