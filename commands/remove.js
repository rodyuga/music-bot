const { canModifyQueue } = require("../GrkSes/RodoBot");

module.exports = {
  name: "remove",
  description: "Kuyruktan şarkı siler.",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Şarkı kuyruğu yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Kullanış: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Kullanış: ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ silindi **${song[0].title}** queue den.`);
  }
};
