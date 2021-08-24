import { Message } from "discord.js";
import TSClient from "./Client";
import Options from './Options';
import db from 'quick.db';

export default class Command {
    public readonly client: TSClient;
    public readonly name: string;
    public readonly db = db;
    constructor(client: TSClient, options: Options, data = db) {
        this.client = client;
        this.name = options.name;
        this.db = data;
    }

    public async run(message: Message, args: string[]): Promise<any> {}
}