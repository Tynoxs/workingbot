const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome to the Hub, ${member.user}! :smile:`);
});

//client.on("message", message => {
   // if (message.author.bot) return;
    //if (message.content && ("fuck")) {
      //  message.channel.sendMessage(`${client.user} don't swear!`);
    //}
//});

client.on('message', message => {
    
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    
    let args = message.content.split(" ").slice(1);
    var argresult = args.join('');
    
        //says something through the bot
    
    if (command === "alert") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "Admin Power");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        client.channels.get('193495594789109761').sendMessage(`**Alert:** ${args.join(" ")}`);
    }
        //client.channels.get('193495594789109761')
        //shows what commands the bot uses
    
    if (command === "help") {
    message.channel.sendMessage('```TheHub Bot keeps track of Users that join, get banned and unbanned.\n\nNormal Commands:\n/report @Username "Reason" = Disabled\n/rqch "Channelname" = Disabled\n\nAdmin Power Commands:\n/alert Text = Sends a message through the Bot\n/setgame Statusname = Sets the "is playing" status of the Bot\n/ban @Username = Bans a User from your Discord Server\n/kick @Username = Kicks a User from your Discord Server```');
    } else
        
        //sets the playing status of the bot
        
    if (command == "setgame") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "Admin Power");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
            client.user.setGame(argresult).then(member => {
            message.channel.sendMessage(`*Playing Status has been changed!*`).catch(console.error);
        });
        }
    
        
    
        //kicks a user using the @mention command
        
    if (command === "kick") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "Admin Power");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        }
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("Please mention a user to kick");
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.channel.sendMessage("Invalid User");
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.sendMessage("I don't have the permission (KICK_MEMBER) to do this.");
        }
        kickMember.kick().then(member => {
            message.channel.sendMessage(`*${member.user.username} was kicked!*`).catch(console.error);
        }).catch(console.error);
        }
        
        //bans a user using the @mention command
    
    if (command === "ban") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "Admin Power");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        }
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("Please mention a user to ban");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if(!banMember) {
            return message.channel.sendMessage("Invalid User");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.sendMessage("I don't have the permission (BAN_MEMBER) to do this.");
        }
        banMember.ban().then(member => {
            message.channel.sendMessage(`*${member.user.username} was banned!*`).catch(console.error);
        }).catch(console.error);
        }
  
});

client.login(config.token);