// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token

client.login(config.token);
//decommissioned for the time being 
//var keywords = ['gender', 'logan paul', 'jake paul'];

client.on('message', message => {
    
    //creates the REEE string with random number of Es 
    var ree= 'R';
    num_e=Math.floor(Math.random()*10 + 3);
    for(var i=0; i<=num_e; i++){
        ree += 'E';
    }
    
    //checks if message contains the trigger word and if it does, the bot replies with the string created previously 
    var msg = message.content.toLowerCase();
    if( msg.includes('!triggered') )
        message.channel.send( ree );
});
