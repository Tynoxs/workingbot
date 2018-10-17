const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({ game: { name: 'Say /help', type: 0 } });
});

client.on('message', message => {
      
    setInterval(intervalFunc, 5000);
    
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
  
    //COMMAND - UPDATE MEMBER COUNT
    if (command === "upmember") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "➤ Senior Administrator ✉");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
        message.guild.channels.find("id", "501258481718788097").setName("Member Count: " + message.guild.memberCount);
        message.channel.sendMessage("*Member Count has beed updated!*");
    }
  
    //RANDOM MEMES
    if (command === "meme") {
        if (message.author.bot) return;
        if (!message.author.bot) {
          
        function random_item(items)
        {
  
        return items[Math.floor(Math.random()*items.length)];
     
        }

        const items = [
          "https://cdn.discordapp.com/attachments/501361869706100756/502150588746694686/image0.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141851546026004/Screenshot_20180619-124913.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141850715684866/Screenshot_20180911-0733072.png", "https://cdn.discordapp.com/attachments/501361869706100756/502141850715684864/Screenshot_20180828-075059.png", "https://cdn.discordapp.com/attachments/501361869706100756/502137807842836493/image0.png", "https://cdn.discordapp.com/attachments/501361869706100756/502104161442070574/image.jpg", "https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg", "data:image/jpeg;base64,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", "https://cdn.vox-cdn.com/thumbor/ODsElrql357EFq7YBQ7UCrWmVaQ=/0x0:1570x883/1200x675/filters:focal(658x77:908x327)/cdn.vox-cdn.com/uploads/chorus_image/image/60394313/Untitled.1531838613.jpg", "https://i.redd.it/h4rntqluid911.jpg", "data:image/jpeg;base64,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", "https://i.ytimg.com/vi/GoUSf69AaBg/maxresdefault.jpg", "https://i.redd.it/qdwyrc6h3t111.jpg", "https://solifequotes.com/wp-content/uploads/2016/07/35-Hilarious-Memes-1-Hilarious-Memes.jpg", "https://imgs.chip.de/4cgK9bbLSbvxc034jnXFw6DfuPI=/0x530/filters:no_upscale():format(jpeg):quality(100)/www.chip.de%2Fii%2F2417690378_3b107ef161.jpg", "https://img-9gag-fun.9cache.com/photo/aoez85A_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aD10Xg7_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9E6d_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aKxzYd6_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aLgKXpP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aVYO2gM_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/a735N1L_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aYYb1wN_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a9KdXPZ_460swp.webp", "https://img-9gag-fun.9cache.com/photo/ayB5Q88_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a83Wwqd_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aMZ1vWP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aOYq1vr_460swp.webp", "https://img-9gag-fun.9cache.com/photo/apmqA1n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/ayB5RZy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aqKmWPp_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aNYe47r_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aD10Vp9_460swp.webp", "https://img-9gag-fun.9cache.com/photo/arGpBqV_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a4Q4qNm_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9E5q_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aWYZbrd_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a3QY2W7_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/a5Md2gG_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aD10VPG_460swp.webp", "https://img-9gag-fun.9cache.com/photo/az9bZXq_460swp.webp", "https://img-9gag-fun.9cache.com/photo/axzNRRM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aGZ929K_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aVYOLBP_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aLgKmnM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aGZ9A3n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/av80R4d_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a83W2Ze_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aPYvQvG_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/av80Rpq_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aj8rZAp_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aOYqPdy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aVYOLb8_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a2ZN2bw_460swp.webp", "https://img-9gag-fun.9cache.com/photo/amBXxDy_460swp.webp", "https://img-9gag-fun.9cache.com/photo/a0Q9ngd_460svvp9.webm", "https://img-9gag-fun.9cache.com/photo/aR1QvqM_460swp.webp", "https://img-9gag-fun.9cache.com/photo/apmqbmD_460swp.webp", "https://img-9gag-fun.9cache.com/photo/av80x4n_460swp.webp", "https://img-9gag-fun.9cache.com/photo/aerNmAQ_460swp.webp", "https://i.imgur.com/4cDARsM.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7gLzdhMHNbdQJcCO-P_hgP3lBW2oS4ZOON6veanuw0iuy3ob"];
        message.channel.sendMessage(random_item(items));
          
        }
    }
  
    //COMMAND --- HELP  
    if (command === "help") {
    message.channel.send({embed: {
    color: 10181046,
    author: {
      name: "Command List",
      icon_url: message.guild.iconURL
    },
    description: "A list of all HUB Bot commands",
    fields: [{
        name: "/help",
        value: "Don't have to explain"
      },
      {
        name: "/serverinfo",
        value: "Serverinformation"
      },
      {
        name: "/report @User reason",
        value: "Reports a user to the admins"
      },
      {
        name: "/meme",
        value: "Posts a random meme/video/joke"
      },
      {
        name: "/size",
        value: "Shame or Fame"
      },       
      {
        name: "/shelp",
        value: "Shows all staff commands"
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
  
    //D Size
    if(command === "size") {
      if (message.author.bot) return;
      if (!message.author.bot) {
      function random_dsize(size)
        {
  
        return size[Math.floor(Math.random()*size.length)];
     
        }

        const size = ["8=D", "8==D", "8===D", "8====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8===========D", "8============D", "8=============D", "8==============D", "8===============D", "8================D", "8=================D", "8==================D", "8===================D", "8====================D", "8=====================D", "8======================D", "8=======================D", "8========================D", "8=========================D", "8==========================D", "8===========================D", "8============================D", "8=============================D", "8==============================D", "8===============================D", "8================================D", "8=================================D", "8==================================D", "8===================================D"];
        message.channel.sendMessage(message.author.username + ": " + random_dsize(size));
      }
    }
  
    //COMMAND --- HELP  
    if (command === "shelp") {
    let adminRole = message.guild.roles.find("name", "➤ Administrator ✉");
    if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
    if(message.member.roles.has(adminRole.id)) {
    message.channel.send({embed: {
    color: 10038562,
    author: {
      name: "Admin Command List",
      icon_url: message.guild.iconURL
    },
    description: "(O) = Owner, (A) = Admin, (M) = Mod",
    fields: [{
        name: "(M) /kick @User",
        value: "Kicks a user from the server"
      },
      {
        name: "(M) /ban @User",
        value: "Bans a user from the server"
      },
      {
        name: "(O) /alert -msg-",
        value: "Sends a staff message to the #lounge channel"
      },
      {
        name: "(M) /clear X",
        value: "Deletes X messages"
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
    }
  
    //SERVERINFORMATION
    if (command === "serverinfo") {
    message.channel.send({embed: {
    color: 10181046,
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
    client.channels.get('501801149071097866').sendMessage({embed: {
    color: 15158332,
    author: {
      name: "User Report",
      icon_url: message.guild.iconURL
    },
    description: "A User has been reported on The HUB.",
    fields: [{
        name: "Reported User",
        value: (`${rUser} with ID ${rUser.id}`)
      },
      {
        name: "Reported By",
        value: (`${message.author} with ID ${message.author.id}`)
      },
      {
        name: "Channel",
        value: (`${message.channel}`)
      },
      {
        name: "Time",
        value: (`${message.createdAt}`)
      }, 
      {
        name: "Reason",
        value: (`**${rreason}**`)
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© TheHUB"
    }
  }
});
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
