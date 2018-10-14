const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    var argresult = args.join('');
    
    if (command === "help") {
    message.channel.sendMessage('```Unavailable```');
    } else    
      
    if (command === "size") {
    message.channel.sendMessage(`8==D`);
    } else

});

client.login(process.env.BOT_TOKEN);
