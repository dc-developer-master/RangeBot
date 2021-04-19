module.exports = {
    name:"fake-mesaj",
    async run(client, message, args){
        if (!message.guild) return;
        const kanal = message.mentions.channels.first();
        if (!kanal) {
            return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}sahtemesaj #kanal <botun atmasını istediğiniz mesaj>**`);
        }
        if (!args[1]) {
            return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}sahtemesaj #kanal <botun atmasını istediğiniz mesaj>**`);
        }
        kanal.send(args[1])
    }
}