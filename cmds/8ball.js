module.exports.run = async (bot, message, args) => {

    //Quits if author = bot, and throws an error if you dont ask a question
    if (message.author.bot) return;
		let questionball = args.join(" ");
		if(!questionball) return message.channel.send("That does not look like a question.");
      		if (!message.author.bot) {
      			function random_queball(qball)
        	{
  
        		return qball[Math.floor(Math.random()*qball.length)];
     
        	}

		//A list of random responses
    const qball = [
			"I don't know", 
			"Probably", 
			"Yes", 
			"No", 
			"I think so yes",
			"50% / 50%",
			"I would say so, yes",
			"Of course"];
           
     //Outputs a random answer
     message.channel.sendMessage(random_queball(qball));
    }

module.exports.help = {
    name: "8ball" 
}
