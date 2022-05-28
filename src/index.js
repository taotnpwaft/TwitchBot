const tmi = require("tmi.js");
const express = require('express');
const app = express();
const axios = require("axios");

const client = new tmi.Client({
    options: { debug: true },
    identity: {
      username: BOT_USERNAME,
      password: "oauth:" + OAUTH_TOKEN,
    },
    channels: [CHANNEL_NAME],
});