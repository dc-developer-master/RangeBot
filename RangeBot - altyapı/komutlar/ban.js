module.exports = {
    name:"ban",
    async run(client, message, args){
        if (!message.guild) return;
        if (!message.member.hasPermission('BAN_MEMBERS'))return message.channel.send(`> **banlanamadı** | ${üye.tag}`);
        const üye = message.mentions.users.first();
        if (üye) {
            const üye1 = message.guild.member(üye);
            if (üye1) {
                üye1.ban({
                reason: args[1],
                }).then(() => {
                message.channel.send(`> **banlandı** | ${üye.tag}`);
                }).catch(err => {
                message.channel.send(`> **banlanamadı** | ${üye.tag}`);
                console.error(err);
                });
            }else {
            return message.channel.send('> kişi bu sunucuda değil');
            }
        } else {
            return message.channel.send('> kimseyi etiketlemediniz')
        }
    }
}