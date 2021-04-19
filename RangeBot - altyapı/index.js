const Discord = require('discord.js')
const client = new Discord.Client()
const { readdirSync } = require('fs')
const { join } = require('path')
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database");
client.commands = new Discord.Collection()
const ayarlar = require('./config.json')
const prefix = ayarlar.prefix;
require('./utils/eventloader')(client);
require('./utils/RangeUtil')(client);
const komutlar = readdirSync(join(__dirname, "komutlar")).filter(dosya =>dosya.endsWith(".js"));
for(const dosya of komutlar){
    const komut = require(join(__dirname, "komutlar", `${dosya}`));
    if (typeof komut.name == "object") {
        komut.name.forEach(x => {
            client.commands.set(x, komut)
        });
    }else{
        client.commands.set(komut.name, komut)
    }
}

client.on('error', err =>console.log(err))
client.on('message', msg=>{
    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return;
        try {
            client.commands.get(command).run(client, msg, args);

        } catch (error){
            console.log(error);
        }
    }
})