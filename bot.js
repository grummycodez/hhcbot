const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
var roblox = require('roblox-js');

const TOKEN = "NDQyMjY2NjEyMzM1MTE2Mjg5.Dc8UcQ.VAr7YgPu3IIDhuklxSDYcsu0M8U";
const PREFIX = "!";
const client = new Discord.Client();


var bot = new Discord.Client();
var groupId = 3971932;
var maximumRank = 255;

roblox.login({username: "Ira_BOT", password: “monkeymonkey”}).then((success) => {

}).catch(() => {console.log("Sorry, it failed.");});

var fortunes = [
    "Yes",
    "No",
    "Maybe",
];

function pluck(array){
    return array.map(function(item) { return item['name']; })
}

function hasRole(members, role){
  if (members.roles==null){
    return false;
  }
    if(pluck(members.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}
//442266612335116289
function isGuild(message, id){
	if(message.guild.available){
		if(message.guild.id == id){
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}

function isRole(message, name){
	return message.member.roles.find("name", name)
}

function isAdmin(message){
  try {
    eval(message['member']['roles']);
  } catch(error){
    return false;
  }

	if(
		isRole(message, "SHR") ||
		isRole(message, "s") 
		){

		return true;
	} else {
		return false;
	}
}

bot.on("ready", () => {
    console.log("Ready");  
    bot.user.setGame("!help | Distopia Hotels");
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "training":
    message.channel.send({embed: {
        color: 3447003,
        author: {        
            name: message.author.tag,
            icon_url: message.author.avatarURL 
        },
        title: "",
        fields: [{
            name: "Link to Guide",
            value: "https://goo.gl/YMW6rq"
          },
          {
            name: "Shout Format",
            value: "Beginning: ``[TRAINING] are being hosted at TIME by HOST! Head on down to the training center for a chance of a promotion!``\nSlocked: ``[TRAINING] have been s-locked! Sorry if you could not make it, why not head on down to the hotel to cheer you up?``\nCompleted: ``[TRAINING] are now over! Sorry if you could not make it or failed, why not head on down to the hotel to cheer you up?``"
          },
          {
            name: "Training Stages",
            value: "> Reception Training\n> Chef Training\n> Theory Training"
          },
          {
            name: "Promotions",
            value: "Trainees will need 1.5/4 points.\nJunior Receptionists will need 2/4 points.\nSenior Receptionists will need 4/4 (IV/IV) points."
          }
        ],
        footer: {
          text: "Before you host, you must put your session on the Trello! https://trello.com/b/0AYncCEw"
              }
      }
    });
        break;
    case "interview":
        message.channel.send({embed: {
            color: 3447003,
            author: {        
                name: message.author.tag,
                icon_url: message.author.avatarURL 
            },
            title: "",
            fields: [{
                name: "Link to Guide",
                value: "https://goo.gl/6aLPPT"
              },
              {
                name: "Shout Format",
                value: "Beginning: ``[INTERVIEWS] are being hosted at TIME by HOST! Head on down to the interview center for a chance of a job!``\nSlocked: ``[INTERVIEWS] have been s-locked! Sorry if you could not make it, why not head on down to the hotel to cheer you up?``\nCompleted: ``[INTERVIEWS] are now over! Sorry if you could not make it or failed, why not head on down to the hotel to cheer you up?``"
              },
              {
                name: "Interview Questions",
                value: "I. Please correct this sentence: “hullo welcom to nolva hotels hotel how may i help u?” \n^ If they don’t correct it right, they have failed.\nII. Why do you want to work for us?\nIII. Why should we hire you?\nIV. Have you ever worked in another ROBLOX company? If so, where\nV. How would your rate your grammar skills?\nVI. How would you rate your activity on roblox?\nVII. Describe to us how you would treat a customer."
              },
            ],
            footer: {
              text: "Before you host, you must put your session on the Trello! https://trello.com/b/0AYncCEw"
                  }
          }
        });
            break;
            
            case "report":
                
                    //!report @ned this is the reason
                
                    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                    if(!rUser) return message.channel.send("Couldn't find user.");
                    let rreason = args.join(" ").slice(22);
                
                    let reportEmbed = new Discord.RichEmbed()
                    .setDescription("Nolva Hotels | Reported User")
                    .setColor("#15f153")
                    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
                    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
                    .addField("Channel", message.channel)
                    .addField("Time", message.createdAt)
                    .addField("Reason", rreason);
                
                    let reportschannel = message.guild.channels.find(`name`, "reports");
                    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
                
                
                    message.delete().catch(O_o=>{});
                    reportschannel.send(reportEmbed);
                
                    return;

                    case "ban":
                        
                            let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                            if(!bUser) return message.channel.send("Can't find user!");
                            let bReason = args.join(" ").slice(22);
                            if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
                            if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
                        
                            let banEmbed = new Discord.RichEmbed()
                            .setDescription("Nolva Hotels | Ban Report")
                            .setColor("#bc0000")
                            .addField("Banned User", `${bUser} with ID ${bUser.id}`)
                            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
                            .addField("Banned In", message.channel)
                            .addField("Time", message.createdAt)
                            .addField("Reason", bReason);
                        
                            let incidentchannel = message.guild.channels.find(`name`, "incidents");
                            if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
                        
                            message.guild.member(bUser).ban(bReason);
                            incidentchannel.send(banEmbed);
                        
                        
                return;

                case "announce":
                    if (message.member.hasPermission("ADMINISTRATOR")) {
                        const color = args[0]
                             
                        const text = args.slice(1).join(" ");
                        if (text.length < 1) return message.channel.send("Can not announce nothing");
                        //const colour = args.slice(2).join("");
                        const embed = new Discord.RichEmbed()
                        .setColor("0x" + color)
                        .setTitle("Nolva Hotels Server Announcement:")
                        .setDescription(text);
                        message.channel.send("@everyone")
                        message.channel.send({embed})
                    }

                    return;

            case "kick":
                    
                        //!kick @daeshan askin for it
                    
                        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                        if(!kUser) return message.channel.send("Can't find user!");
                        let kReason = args.join(" ").slice(22);
                        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
                        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
                    
                        let kickEmbed = new Discord.RichEmbed()
                        .setDescription("v Hotels | Kick Report")
                        .setColor("#e56b00")
                        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
                        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
                        .addField("Kicked In", message.channel)
                        .addField("Tiime", message.createdAt)
                        .addField("Reason", kReason);
                    
                        let kickChannel = message.guild.channels.find(`name`, "incidents");
                        if(!kickChannel) return message.channel.send("Can't find incidents channel.");
                    
                        message.guild.member(kUser).kick(kReason);
                        kickChannel.send(kickEmbed);
                    
                        return;

    case "help":
    var embed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .addField("<<< Command List >>>", "Use !help <command name> for details", true)
    .addField("<< Fun Commands >>", true)
    .addField("!8ball", "Rolls an 8 Ball.", true)
    .addField("!reverse", "Reverses Text", true)
    .addField("!yomama", "Tells the mentioned user a Yo Mama Joke.", true)
    .addField("<< Miscellaneous >>", true)
    .addField("!botinfo", "Gives some useful bot information.", true)
    .addField("!botstats", "Gives some useful bot statistics.", true)
    .addField("!permlevel", "Tells you your permission level for the current message location.", true)
    .addField("!ping", "It... like... pings. Then Pongs. And it's not Ping Pong.", true)
    .addField("!serverinfo", "Gives some useful bot information.", true)
    .addField("<< ROBLOX >>",  true)
    .addField("!getrank", "Loads the ROBLOX rank for the specified ROBLOX user.", true)
    .addField("!robloxinfo", "Loads the ROBLOX information for the specified ROBLOX user.", true)
    .addField("!interview", "Shows you the guides for interviews.", true)
    .addField("!training", "Shows you the guides for trainings.", true)
    .addField("!restorerank", "Gives you back your rank in the previous Nolva Hotels group.", true)
    .addField("<< SYSTEM >>")
    .addField("!help", "Displays all the available commands for your permission levels", true)
    .setFooter("Nolva Hotels | Bot")
    message.channel.sendEmbed(embed);
    break;
    case "botinfo":
    var embed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .addField("Name", "Distopia#2747")
    .addField("Head Developer", "<@431184645653135363>")
    .addField("Developers", `<@399982462245011456>`)
    .addField("User's Serving", bot.users.size, true)
    .addField("Channels", bot .channels.size, true)
    .addField("Commands", "!help", true)
    .addField("Scripting Language", "JavaScript", true)
    .addField("Current Version", "1.7.1", true)
    .addField("Main Sponsor", "Nolva Hotels", true)
    .setThumbnail(bot.user.avatarURL)
    message.channel.sendEmbed(embed);
    break;
    case "ping":
    const msg = message.channel.send("Ping?");
    message.channel.send(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    break;
    case "info":
        message.channel.send("I'm a Super Bot Created by Reece!");
        break;
        case "demote":
        message.channel.send("Sorry, This command is still under development!");
        break;
    case "8ball":
    if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "I don't know", ":crystal_ball: Ask me again later."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
            break;
    case "buy":z
        message.channel.send("Our Prices are as Follow's:  ***Personal £2/$2   Turbo £4/$4    Enterprise   £6/$6*** Thank you");
        break;
    case "admin":
      if(isAdmin(message)){
        console.log("User is a admin")
      } else {
        console.log("User is not a admin.")
      }
    case "promote":
      if(isAdmin(message)){
        var username = args[1]
    	if (username){
    		message.channel.send()
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(``)
					} else {
						message.channel.send()
						roblox.promote(groupId, id)
						.then(function(roles){
							var embed = new Discord.RichEmbed()
                            .setColor("#FF9900")
                            .setAuthor(message.author.tag, message.author.avatarURL)
                            .setDescription("User has been successfully ranked, but unable to be messaged.")
                            message.channel.sendEmbed(embed);
						}).catch(function(err){
							message.channel.send("Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
      } else {
        message.channel.send("")
      } 

    case "fire":
      if(isAdmin(message)){
        var username = args[1]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank < rank){
					} else {
						roblox.setRank(groupId, id, 2)
						.then(function(roles){
                            var embed = new Discord.RichEmbed()
                            .setColor("#FF9900")
                            .setAuthor(message.author.tag, message.author.avatarURL)
                            .setDescription("User has been successfully ranked, but unable to be messaged.")
                            message.channel.sendEmbed(embed);
						}).catch(function(err){
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
      } else {
        message.channel.send("")
      } 
    default:
        message.channel.send("You do not have permission to use this command.\n Your permission level is 0 (User)\n This command requires level 15 (Distopia SHR)");
        
    }
});

bot.login(TOKEN);