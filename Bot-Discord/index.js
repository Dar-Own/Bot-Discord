const Discord = require('discord.js')
const bot     = new Discord.Client()

bot.on('ready', function () {
    bot.user.setActivity('On va te trouver du travail').catch(console.error)
})

bot.on('message', (message) => {
    if (message.content === '!kaolamaka'){
        message.channel.send('Samaka')
    }
    if (message.content === '!fdp'){
        message.channel.send("T'es qu'un fils de pute, ton nom c'est fils de pute")
    }
    if (message.content === '!suicide') {
        message.channel.send('Mais suicide toi rend service à la société')
    }

bot.login('NzE3NzA3Nzg4NDY1MjA5NDA2.XteQFw.R_opUf917GdnD3wL4_LJqWufsbg')