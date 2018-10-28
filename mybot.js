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
    	if (!message.content.startsWith(prefix)) return;
    	let command = message.content.split(" ")[0];
    	command = command.slice(prefix.length);   
     
	//Args - Everything after a command
    	let args = message.content.split(" ").slice(1);
   	var argresult = args.join('');
		
	let cmd = bot.commands.get();
	if (cmd) cmd.run(bot, message, args);
		
	if (message.author.bot) {
		
	//Reacts to Welcome Messages and updated Member Count
  	message.guild.channels.find("id", "501258481718788097").setName("Member Count: " + message.guild.memberCount);	
		
	}
	});
		
	bot.login(process.env.BOT_TOKEN);
