const Discord = require("discord.js");
const fs = require("fs");
const prefix = '/';

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//Fetch Commands
fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands found!");	
		return;
	}
	
	console.log(`Loading ${jsfiles.length} commands!`);
	
	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		bot.commands.set(props.help.name, props);
	});
});

	//Bot startup
  	bot.on('ready', () => {
  	bot.user.setStatus('available');
  	bot.user.setPresence({ game: { name: 'Say /help', type: 0 } });
	});

	//Bot reacts to
	bot.on('message', async message => {  
    
	//Gets commands
    	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
		
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
		
	if(!command.startsWith(prefix)) return;
		
	let cmd = bot.commands.get(command.slice(prefix.length));
	if (cmd) cmd.run(bot, message, args);
		
	});
		
	bot.login(process.env.BOT_TOKEN);
