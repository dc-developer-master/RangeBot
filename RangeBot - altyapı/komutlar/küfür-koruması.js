const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");
module.exports = {
    name:["küfür", "küfür-koruması"],
    async run(client, message, args){
        if(!args[0])return message.channel.send(`bu komutun kullanımı **${require('../config.json').prefix}küfür-koruması [aç/kapat]**`);
        if(args[0] === "aç"){
            if (!db.has('küfürkoruma'+message.guild.id, "açık")){
                db.set('küfürkoruma'+message.guild.id, "açık")
                message.channel.send('Bu özellik başarı ile açıldı.')
            }else return message.channel.send('Bu özellik zaten açık.')
        }else if (args[0] ==="kapat") {
            if (db.has('küfürkoruma'+message.guild.id, "açık")){
                db.delete('küfürkoruma'+message.guild.id, "açık")
                message.channel.send('Bu özellik başarı ile kapatıldı.')
            }else return message.channel.send('Bu özellik zaten kapalı.')
        }else return;
    }
}