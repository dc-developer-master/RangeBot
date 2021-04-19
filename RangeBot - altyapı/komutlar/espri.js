const Discord = require("discord.js");
module.exports = {
    name:'espri',
    async run(client, message, args)
    {
        var Random = [
            "Abi sana Sıla'nın selamı var. \nHangi Sıla?\n Gayri Safi Milli HaSıla",
            "Gözlüklerin numaralı mı?\nYok kale arkası."
        ];
          var espri = Math.floor(Math.random() * Random.length);
          const espriembed = new Discord.MessageEmbed()
            .setDescription(`${Random[espri]}`)
            .setColor("GREEN");
        message.channel.send(espriembed);
    }
}