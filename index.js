// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`
const client = new Discord.Client();
const fs = require("fs");

//Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
//congig.prefix contains the prefix

const keywords = require("./keywords.json");
//keywords.list contains array of keywords

// client.on("message", message => {

//     if(message.author.bot) return;
//     var args = false;
//     var str = "abcd";
//     keywords.list.forEach(str => {        
//         if(message.content.includes(str))
//             args = true; 
//     });

//     if(args)
//     {   
//         //creates the REEE string with random number of Es 
//         var ree= 'R';
//         num_e=Math.floor(Math.random()*10 + 5);
//         for(var i=0; i<=num_e; i++){
//             ree += 'E';
//         }
//         message.channel.send(ree);

//     }
// });

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);

//     setInterval(function () {
//         var e = 'e'.repeat(Math.floor(Math.random() * 10) + 2);
//         var name = 'R' + e + 'tardo';
//         client.guilds.get(config.tudcse18).members.get(config.reecardo).setNickname(name);
//     }, 5000);
// });

client.on('ready', () => {
    setInterval(function () {
        var order = [0, 1, 2, 3]
        shuffle(order)
        var name = "dxts"
        var name = name[order[0]] + name[order[1]] + name[order[2]] + name[order[3]]

        client.guilds.get(config.tudcse18).members.get(config.dxts).setNickname(name)
    }, 10000)
})


// client.on("message", message => {

//     if (message.author.bot) return;
//     if (message.content.indexOf(config.prefix) !== 0) return;

//     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//     //.slice removes the prefix, ie '!',
//     //trim removes any extra spaces,
//     //split splits the string by the spaces

//     const command = args.shift().toLowerCase();
//     //shift returns the first element from the array, ie the command
//     //tolowercase ensures !command !Command !COMMAND all work

//     if (command === "ree") {
//         //let member = message.mentions.members.first();

//         message.delete();

//         //creates the REEE string with random number of Es 
//         var ree = 'R';
//         num_e = Math.floor(Math.random() * 10 + 3);
//         for (var i = 0; i <= num_e; i++) {
//             ree += 'E';
//         }
//         message.channel.send(ree);

//     }
//     else if (command === "flip") {

//         message.delete();

//         message.channel.send("(╯°□°）╯︵ ┻━┻");
//     }
//     else if (command === "flipall") {
//         message.delete();

//         message.channel.send("┻━┻︵ \(°□°)/ ︵\n\t ┻━┻");
//     }
//     else if (command === "tabledown") {
//         message.delete();

//         message.channel.send("┬─┬ ノ( ゜-゜ノ)");
//     }
// });


client.login(config.token);
