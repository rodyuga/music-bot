const { canModifyQueue } = require("../GrkSes/RodoBot");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Çalınan şarkıyı geçer",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Senin için atlayabileceğim hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ Şarkı geçildi.`).catch(console.error);
  }
};
