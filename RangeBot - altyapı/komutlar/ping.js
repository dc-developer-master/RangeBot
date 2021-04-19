const { MessageEmbed } = require('discord.js')
module.exports = {
    name:"ping",
    async run(client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Ping Ölçüldü')
        .addField(`Botun pingi: ${client.ws.ping} ms`)
        .addField('Botun Mesaj Pingi:', `${Date.now() - message.createdTimestamp} ms`)
        .setColor('RED')
        .setTimestamp()
        message.channel.send(embed)
    }
}