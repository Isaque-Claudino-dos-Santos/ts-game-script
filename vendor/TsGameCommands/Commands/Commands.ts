import InterfaceCommands from './InterfaceCommands';
import CommandCreate from './CommandCreate';
import TypeCommand from '../Types/TypeCommand';

export default class Commands implements InterfaceCommands {
  private readonly action: string[];
  private readonly flags: TypeCommand.Flags;

  public readonly create: CommandCreate = new CommandCreate();

  constructor(args: string[]) {
    this.isValidArgs(args);

    this.action = args[0].split('=');
    this.flags = this.argsToObject(args.slice(1, args.length));
  }

  private checkExistArgs(args: string[]): boolean {
    return args.length > 0;
  }

  private isValidFormatArg(arg: string): boolean {
    const pattern = new RegExp(/([\w]*)=([\w]*)/);
    return pattern.test(arg);
  }

  private isValidArgs(args: string[]): void {
    if (!this.checkExistArgs(args)) {
      console.log('None params passed in command line.'.red, '\n');
      console.log('Is expected:'.green, 'verb=action'.blue);
      console.log(
        'Example:'.green,
        'npm run game create=object args[flags=value ...]'.blue
      );
      throw '';
    }

    if (!this.isValidFormatArg(args[0])) {
      console.log(`The arg ${args[0]} not have format expected.`.red, '\n');
      console.log('Is expected: '.green, 'verb=action'.blue);
      throw '';
    }
  }

  private argsToObject(flags: string[]): TypeCommand.Flags {
    if (flags.length < 0) return {};

    const newFlags: TypeCommand.Flags = {};

    flags.forEach((f) => {
      if (!this.isValidFormatArg(f)) {
        console.log(`The arg ${f} not have format expected.`.red, '\n');
        console.log('Is expected: '.green, 'flag=value'.blue);
        throw '';
      }
      const flagsSplit = f.split('=');
      const key = flagsSplit[0];
      const value = flagsSplit[1];
      newFlags[key] = value;
    });

    return newFlags;
  }

  execute(): void {
    const verb = this.action[0];
    const method = this.action[1];
    const flag: TypeCommand.Flags = this.flags;

    if (!(verb in this)) {
      console.log(
        'The verb'.red,
        verb.underline.white,
        'passed not valid.'.red
      );

      throw '';
    }

    const currentVerb = this[verb as TypeCommand.Actions];
    if (typeof currentVerb === 'function') return;
    if (!(method in currentVerb)) {
      console.log(
        'The method'.red,
        method.underline.white,
        'passed not exist in'.red,
        verb.underline.white
      );

      throw '';
    }

    type TypeCurrentVerb = keyof typeof currentVerb;

    currentVerb[method as TypeCurrentVerb](flag);
  }
}
