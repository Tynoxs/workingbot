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
    message.channel.sendMessage(`*8==D*`);
    } else
      
    client.on("message", message => {
    if (message.author.bot) return;
    if (message.content && ("http://")) {
    message.channel.sendMessage(`${client.user} no links in this Channel!`);
    }
});
  
  client.on("message", message => {
    if (message.author.bot) return;
    if (message.content && ("https://")) {
    message.channel.sendMessage(`${client.user} no links in this Channel!`);
    }
});

});

client.login(process.env.BOT_TOKEN);
