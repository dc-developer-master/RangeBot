const { MessageEmbed } = require('discord.js')
module.exports = {
    name:["fbi"],
    async run(client, message, args){
        const embed = new MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/572804441237880847/574179078597378048/tenor_3.gif')
        message.channel.send(embed)
    }
}