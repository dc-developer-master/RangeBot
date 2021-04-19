require('dotenv').config();
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase();
module.exports = client => {
    client.login(process.env.token)   
    const küfürler = require('../küfürler.json')
    client.on('message', message=>{
    if(message.content.toLowerCase()=== küfürler.küfür1 || küfürler.küfür2 || küfürler.küfür3 || küfürler.küfür4 || küfürler.küfür5 
    || küfürler.küfür6 || küfürler.küfür7 || küfürler.küfür8 || küfürler.küfür9 || küfürler.küfür10 || küfürler.küfür11 
    || küfürler.küfür12 || küfürler.küfür13 || küfürler.küfür14 || küfürler.küfür15 || küfürler.küfür16 || küfürler.küfür17 || küfürler.küfür18){
            if(db.has("küfürkoruma"+message.guild.id)){
                message.delete()
            }
        }
    });
    client.on('message', message=>{
        if(message.content.toLowerCase()==="sa"){
            if(db.has("saas"+message.guild.id)){
                message.channel.send('as')
            }
        }
    });
}