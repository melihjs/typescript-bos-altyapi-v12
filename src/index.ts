import TSClient from './Client';
import fs from 'fs';
const client = new TSClient({
    ws: {
        intents: [ 
            'GUILDS', 
            'GUILD_MESSAGES'
        ]
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    http: { 
        version: 9
    }
});

client.on('ready', async () => {
    console.log('TypeScript boş altyapı v12!');
});

client.on('message', async (message) => {
    var prefix = "";
    if (!message.guild) return;
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift();
    var cmd = client.commands.get(command);
    if (!cmd) return;
    cmd.run(message, args);
});

fs.readdir('./dist/commands/', async (err, files) => {
    if (err) throw new Error(err.message);
    files.forEach(async (dosya) => {
        var file = new (require(`./commands/${dosya}`))(client);
        client.commands.set(file.name, file);
    });
});

client.runner("");