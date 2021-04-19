module.exports = client =>{
    var oynuyor = [
        "!!ban",
        "!!kick"
    ];
    var aktivite = oynuyor[Math.floor(Math.random()*(oynuyor.length))]
    client.user.setActivity(`${aktivite}`)
}