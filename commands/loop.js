const { canModifyQueue } = require("../GrkSes/RodoBot");

module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "Müzik döngüsünü değiştir.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Çalan şarkı yok önce bir şarkı açmayı dene.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Loop açıldı. ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
  }
};
