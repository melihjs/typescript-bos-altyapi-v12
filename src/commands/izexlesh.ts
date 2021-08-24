import Command from '../Command';

class Izexlesh extends Command {
    constructor(client) {
        super(client, {
            name: "izexlesh"
        });
    }

    async run(message, args) {
        return message.reply(this.client.user.id);
    }
}

export = Izexlesh;