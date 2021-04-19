module.exports = {
    name:"kasa-aç",
    async run(client, message, args){
        var link = [
            ":briefcase: | iş kasası",
            ":robot: | robot kasası",
            ":scientist: | bilim kasası",
            ":pilot: | pilot kasası",

        ];
        var msg = link[Math.floor(Math.random()*(link.length))];
        message.channel.send('sana '+msg+' geldi :package:')
    }
}