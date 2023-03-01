const discord = require('discord.js-selfbot-v13');
////////////////////////////////
require("http").createServer((_, res) => res.end("Uptime")).listen(8080); // uptimerobot for 24/7
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
const TIMER1 = settings.TIMERS1;

client.on("ready", () => {

    setInterval(function () {

        let STATE = QUOTE[Math.floor(Math.random() * QUOTE.length)];
        const r = new discord.CustomStatus()
              .setState(STATE);
        client.user.setActivity(r)
    }, TIMER1)
       
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
    }, 8000)
    
   console.log(`${client.user.tag} is running on !`);
});
client.login(TOKEN)


