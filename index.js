const axios = require('axios');
const {Telegraf} = require('telegraf');

const bot =new Telegraf('6843577071:AAFoWKXZqo4w6F_xp3LICMVI4LBnPqyppEU');

bot.start(function (ctx){
    ctx.reply('Welcome to my bot from Abhishek Rawat!!');
});


bot.command('code', async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/abhirawat01/realtime-chat-app/main/client.js');
    console.log('Done');
    return ctx.reply(response.data);
});


bot.on('sticker', (ctx)=> ctx.reply('❤️'));


bot.launch();