module.exports = {
    name:"sahte-dm",
    async run(client, message, args){
        if (!message.guild) return;
        const kullanıcı = message.mentions.users.first();
        if (!kullanıcı) {
            return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}sahte-dm @kişi(bot hariç) <botun atmasını istediğiniz mesaj>**`);
        }
        if (!args[1]) {
            return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}sahte-dm @kişi(bot hariç) <botun atmasını istediğiniz mesaj>**`);
        }
        if (kullanıcı.id === client.user.id) {
            return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}sahte-dm @kişi(bot hariç) <botun atmasını istediğiniz mesaj>**`);
        }
        kullanıcı.send(args[1])
    }
}