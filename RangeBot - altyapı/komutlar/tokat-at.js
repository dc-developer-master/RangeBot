const { MessageEmbed } = require('discord.js')
module.exports = {
    name:"tokatla",
    async run(client, message, args){
        const üye = message.mentions.users.first();
        if (!üye) return message.channel.send(`Bu komutu kullanımı **${require('../config.json').prefix}tokatla @kişi **`)
        var gifs = [
            "https://media.giphy.com/media/cm5psTRdaXffa5zUJF/giphy.gif",
            "https://media.giphy.com/media/jsBPrfwrqWOTDZMYlB/giphy.gif"
        ];
        var msg = gifs[Math.floor(Math.random()*(gifs.length))];
        const embed = new MessageEmbed()
        .addField(üye.tag, ` kişisine tokat atıyorum`)
        .setImage(msg, {size: 4096})
        .setColor('RED')
        .setTimestamp()
        message.channel.send(embed)
    }
}