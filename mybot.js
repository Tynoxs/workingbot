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
  
    //COMMAND - ALERT --- /alert msg --- posts a staff msg in "lounge"
    if (command === "alert") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        client.channels.get('501251380833550336').sendMessage(`**Staff Alert:** ${args.join(" ")}`);
    }
  
  
    //SERVERINFORMATION
    if (command === "serverinfo") {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Server Information",
      icon_url: message.guild.iconURL
    },
    description: "Everything you need to know about The HUB",
    fields: [{
        name: "Server Name",
        value: (`${message.guild.name}`)
      },
      {
        name: "Created On",
        value: (`${message.guild.createdAt}`)
      },
      {
        name: "You Joined",
        value: (`${message.member.joinedAt}`)
      },
      {
        name: "Total Members",
        value: (`${message.guild.memberCount}`)
      }       
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
    }

    //COMMAND - REPORT --- /report @User REASON --- Reports a User and send the report to the report channel
    if (command === "report") {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    client.channels.get('501801149071097866').sendMessage(`**USER REPORT**\n**Reported User:** ${rUser} with ID: ${rUser.id} \n**By:** ${message.author} with ID: ${message.author.id}\n**Channel:** ${message.channel}\n**Time:** ${message.createdAt}\n**Reason:** ${rreason}`);
    message.channel.sendMessage("*User has been reported!*");
    message.delete().catch(O_o=>{});
    }
  
   //COMMAND - CLEAR --- /clear [0] --- clears the amount of msg defined in the command
   if (command === "clear") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
           return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
   });
   }
  
   //COMMAND - KICK --- /kick @user --- kicks a user from the server
   if (command === "kick") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
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
    
    //COMMAND - BAN --- /ban @user --- bans a user from the server
    if (command === "ban") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
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

client.login(process.env.BOT_TOKEN);
