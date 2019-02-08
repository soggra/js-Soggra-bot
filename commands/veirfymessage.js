const { RichEmbed} = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.content.startsWith(`$`)) return message.reply(`This is not my prefix! The Prefix is **$**`);

    const embed = new RichEmbed()
    .setDescription(`Hello! Welcome to **${message.guild.name}**! Please read the Rules
    and react to the message to verify you have agreed with them.
    Then you will automatically receive your role.`)
    .setColor('RANDOM')

    message.channel.send(embed).then(m => m.react(`✅`)).catch(console.error);
}

module.exports.help = {
    name: 'verifymessage',
    aliases: ["vm"]
}