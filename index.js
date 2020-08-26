const Discord =  require('discord.js');
const client = new Discord.Client();
const token = 'NjQ2Njk3NDc1ODU5NTQ2MTMz.XdU6gA.MV5s71qFZz8Xykt9W25oDeW54ko'; // use yours
let prefix = '.';
 
client.on('ready', () =>{
    console.log('Bot is fully operational...')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers | ${client.users.size} Users | .help`, type: "WATCHING"}});
});// Help Command
client.on('message', message =>{
    if (message.content === '.help'){
    const help = new Discord.RichEmbed()
              .setTitle('List of comamands')
              .addField(`**Mass communication**`, '`dmall` - Performs a Mass DM\n `setup` - Gives information on how you can set up the bot.\n `invite` - Invite this bot to your own server!')
              .setColor('000000')
              .setFooter("Bot Coded By ItzPLAYZ");
          message.channel.send(help);
    };
});// Setup Command!
client.on('message', message =>{
    if (message.content === '.setup'){
    const setup = new Discord.RichEmbed()
              .setTitle('**Get started setting up the bot.**')
              .setDescription("To get started create a role called as ``Messenger``.")
              .setColor('000000')
              .setFooter("Bot Coded By ItzPLAYZ");
          message.channel.send(setup);
    };
});/// Invite Command!
client.on('message', message =>{
    if (message.content === '.invite'){
    const help = new Discord.RichEmbed()
              .setTitle('You can get the bot here!')
              .addField(`https://discordapp.com/api/oauth2/authorize?client_id=646697475859546133&permissions=8&scope=bot`, "Bot Coded By ItzPLAYZ")
              .setColor('000000')
              .setFooter("Free DM All Bot!");
          message.author.send(help);
          message.channel.send(":gem: | Check your DM's ");
    };
});
client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author === client.user) { return; }
 
    var msg = message.content.substr(prefix.length).split(' ');
    var cmd = msg[0];
    var prm = msg.join(' ').substr(cmd.length + 1).split(' ');
 
    switch (cmd) {
        case 'dmall':
            if (msg.length < 2) {
                const usage = new Discord.RichEmbed()
                .setTitle('The correct usage is `.dmall <message>`')
                .setColor('363b36');
            message.channel.send(usage);
                return;
            }
            if (!message.member.roles.find(role => role.name === 'Messenger')) {
                const norole = new Discord.RichEmbed()
      .setTitle(message.author.username + ', You do not have the' + role + 'Role!')
              .setColor('363b36');
          message.channel.send(norole);    
                return;
            }
            let members = [];
            message.guild.members.forEach(mem => members.push(mem.id));
            for (let i = 0; i < members.length; i++) {
                let usr = await client.fetchUser(members[i]);
                usr.send(prm.join(' '));
                const sent = new Discord.RichEmbed()
                .setTitle('Sent the Message!')
                .setColor('1aff05');
            message.channel.send(sent);
            }
            break;
 
        case 'b':
            break;
    }
});
 
client.login(token);
