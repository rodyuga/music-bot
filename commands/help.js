const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Bütün komutlar için !help",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Rodo Müzik Botu")
      .setDescription("Bütün komutlar")
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwLSo0hboWvR2FdEU8X_mcxmu3gxDlW2yGoA&usqp=CAU')

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
