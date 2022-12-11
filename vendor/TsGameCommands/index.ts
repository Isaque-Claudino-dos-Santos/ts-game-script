import dotenv from 'dotenv';
dotenv.config();

import Command from './Commands';

const args: string[] = process.argv.slice(2, process.argv.length);

console.log('ARGS: ', args);

const command = new Command(args);

command.execute();
