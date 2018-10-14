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
      
        //sets the playing status of the bot
        
    if (command === "setgame") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
            client.user.setGame(argresult).then(member => {
            message.channel.sendMessage(`*Playing Status has been changed!*`).catch(console.error);
        });
        }

});

client.login(process.env.BOT_TOKEN);
