import { Client, Collection } from 'discord.js';
import Command from './Command';

export default class TSClient extends Client {
    public readonly prefix = "prefix";
    public readonly commands: Collection<string, Command>;
    public readonly aliases: Collection<string[], Command>;
    public readonly logger = m => console.log(m);
    constructor(options) { 
        super(options);
        this.commands = new Collection();
        this.aliases = new Collection();
    }

    public async runner(token: string): Promise<void> {
        super.login(token);
    }
}