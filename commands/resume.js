const { canModifyQueue } = require("../GrkSes/RodoBot");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Durdurulan şarkıyı devam ettirir.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Devam ettirilecek müzik yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶Şarkıya devam ediliyor!`).catch(console.error);
    }

    return message.reply("Şarkı duraklatılmadı.").catch(console.error);
  }
};
