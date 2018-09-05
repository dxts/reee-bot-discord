// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`
const client = new Discord.Client();
const fs = require("fs");
//Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
//congig.prefix contains the prefix

client.on("message", message => {

    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    //.slice removes the prefix, ie '!',
    //trim removes any extra spaces,
    //split splits the string by the spaces

    const command = args.shift().toLowerCase();
    //shift returns the first element from the array, ie the command
    //tolowercase ensures !command !Command !COMMAND all work

    if(command === "ree")
    {
        //let member = message.mentions.members.first();

        message.delete();
        
        //creates the REEE string with random number of Es 
        var ree= 'R';
        num_e=Math.floor(Math.random()*10 + 3);
        for(var i=0; i<=num_e; i++){
            ree += 'E';
        }
        message.channel.send(ree);

    }
});

client.on("guildMemberAdd", message => {
    message.channel.send("Hello there");
});
client.login(config.token);
