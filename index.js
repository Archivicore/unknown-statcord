const discord = require('discord.js-selfbot-v13');
////////////////////////////////
const express = require('express');
const server = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Bot Aktif!')
})

app.listen(port, () => {
    console.log(`Example Listening on port ${port}`)
})
////////////////////////////////

//login
require('dotenv').config();
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const client = new discord.Client({
          checkUpdate: false,
      });

const settings = require('./settings.json');
const QUOTE1 = settings.QUOTE1;
const QUOTE2 = settings.QUOTE2;
const QUOTE3 = settings.QUOTE3;
const QUOTE4 = settings.QUOTE4;

client.on("ready", () => {
   const r = new discord.CustomStatus()
         .setState(QUOTE1)
       
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
    }, 10000)
   let activity = 1;
   setInterval(() => {
       r[2] = new discord.CustomStatus()
                 .setState(QUOTE2);
       r[3] = new discord.CustomStatus()
                 .setState(QUOTE3);
       r[4] = new discord.CustomStatus()
                 .setState(QUOTE4);
       if (activity > 4) activity = 0;
       client.user.setActivity(r[activity])
       activity++;
   }, 10000)
   console.log(`${client.user.tag} is running on !`);
});
client.login(TOKEN)


