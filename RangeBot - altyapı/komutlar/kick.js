module.exports = {
    name:"kick",
    async run(client, message, args){
        if (!message.guild) return;
        if (!message.member.hasPermission('KICK_MEMBERS'))return;
        const üye = message.mentions.users.first();
        if (üye) {
            const üye1 = message.guild.member(üye);
            if (üye1) {
                üye1.kick().then(() => {
                message.channel.send(`> **atıldı** | ${üye.tag}`);
                }).catch(err => {
                message.channel.send(`> **atılamadı** | ${üye.tag}`);
                console.error(err);
                });
            }else {
            return message.channel.send('> bu kişi bu sunucuda değil');
            }
        } else {
            return message.channel.send('> kimseyi etiketlemediniz lütfen bir kişiyi etiketleyin')
        }
    }
}