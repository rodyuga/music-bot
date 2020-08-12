const { canModifyQueue } = require("../GrkSes/RodoBot");

module.exports = {
  name: "pause",
  description: "Çalınan şarkıyı durdurur.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Şuan çalan şarkı yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ Müzik durduruldu.`).catch(console.error);
    }
  }
};
