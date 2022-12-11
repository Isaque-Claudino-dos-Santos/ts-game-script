import dotenv from 'dotenv';
import Command from './Commands';
import colors from 'colors';
colors.enable();
dotenv.config();

const args: string[] = process.argv.slice(2, process.argv.length);

console.log('ARGS: ', args, 'lenght ', args.length, '\n');

try {
  const command = new Command(args);

  command.execute();
} catch (err) {
  console.log(err);
}
