const commando = require('discord.js-commando');
const bot = new commando.Client();

var response = ["Fook offfff", "Beeee gone u twaaaat", "Foookn Coont", "Doooowwwnie Scoom", "Shoooot UUUUUp Beeech"];

bot.on('message', (message) => {
    if (message.author.id == '498937355718361088') {
       message.reply(response[Math.floor(Math.random() * 5)]);
    }
    else{
        return;
    }


    if (message.content == 'id'){
        message.reply("Your Id: "+message.author.id+"");
    }

});


 

bot.login(process.env.BOT_TOKEN);
