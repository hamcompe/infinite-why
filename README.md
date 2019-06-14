# Infinite why

Jeff bot will always ask you why, again and again and again and again...

## Development manual

1. [Setup Line account, channel and add the bot to your Line account](https://developers.line.biz/en/docs/messaging-api/getting-started/)
2. Run server by `yarn dev`
3. Open public server by [ngrok](#notes) e.g.,

```shell
ngrok http 3000
```

4. Copy link that got from ngrok and define it in Line’s channel setting - **Webhook URL** e.g., `link-from-ngrok.io/api/webhook`
5. Define channel variables by creating `.env` file e.g.,

```
CHANNEL_ACCESS_TOKEN=yahoo
CHANNEL_SECRET=ohno
TEST_USER_ID=123
```

6. Try sending `hello, world` message to your Line’s account by access http://localhost:3000/api/test

## Notes

If you don’t have `ngrok` you can install by

```shell
yarn global add ngrok
```
