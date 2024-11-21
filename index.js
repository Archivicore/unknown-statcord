const discord = require('discord.js-selfbot-v13');
////////////////////////////////
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot Aktif!')
});

app.listen(port, () => {
    console.log(`Example Listening on port ${port}`)
});
////////////////////////////////

//login
require('dotenv').config();
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const client = new discord.Client({
          checkUpdate: false,
      });

const settings = require('./settings.json');
const QUOTE = settings.QUOTE;
const TIMERS = settings.TIMERS;

client.on("ready", () => {

    setInterval(function () {

        let STATE = QUOTE[Math.floor(Math.random() * QUOTE.length)];
        const r = new discord.CustomStatus()
              .setState(STATE)
              .setEmoji('');
        client.user.setActivity(r)
    }, TIMERS)

    setInterval(function(){
        setTimeout(function(){
            client.user.setStatus('online')
        }, 1000)

        setTimeout(function(){
            client.user.setStatus('dnd')
        }, 2500)

        setTimeout(function(){
            client.user.setStatus('idle')
        }, 4000)
    }, TIMERS)

   console.log(`${client.user.tag} is running on !`);
});
client.login(TOKEN)
