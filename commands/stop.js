const { canModifyQueue } = require("../GrkSes/RodoBot");


module.exports = {
  name: "stop",
  description: "Çalınan müziği durdurur ve çıkar.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Şuan bir şey çalmıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ Müzik durduruldu!`).catch(console.error);
  }
};
