const { MessageEmbed } = require('discord.js')
const prefix = require('../config.json').prefix;
module.exports = {
    name:["yardım", "help"],
    async run(client, message, args){
        const embed = new MessageEmbed()
        .addField(prefix, 'avatar').addField(prefix, 'ban')
        .addField(prefix, 'djsdocs').addField(prefix, 'docs')
        .addField(prefix, 'espri').addField(prefix, 'fbi')
        .addField(prefix, 'kasa-aç').addField(prefix, 'kick')
        .addField(prefix, 'küfür-koruması').addField(prefix, 'ping')
        .addField(prefix, 'sa-as').addField(prefix, 'sahte-dm')
        .addField(prefix, 'fake-mesaj').addField(prefix, 'tokatla')
        message.channel.send(embed)
    }
}