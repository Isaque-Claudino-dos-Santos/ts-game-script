import InterfaceCommands from './InterfaceCommands';
import CommandCreate from './CommandCreate';
import TypeCommand from '../Types/TypeCommand';

export default class Commands implements InterfaceCommands {
  private readonly action: string[];
  private readonly flags: TypeCommand.Flags;

  public readonly create: CommandCreate = new CommandCreate();

  constructor(args: string[]) {
    this.action = args[0].split('=');
    this.flags = this.argsToObject(args.slice(1, args.length));
  }

  private argsToObject(flags: string[]): TypeCommand.Flags {
    if (flags.length < 0) return {};

    const newFlags: TypeCommand.Flags = {};

    flags.forEach((f) => {
      const flagsSplit = f.split('=');
      const key = flagsSplit[0];
      const value = flagsSplit[1];
      newFlags[key] = value;
    });

    return newFlags;
  }

  execute(): void {
    const prop = this.action[0];
    const method = this.action[1];
    const flag: TypeCommand.Flags = this.flags;

    const currentProp = this[prop as TypeCommand.Actions];

    if (typeof currentProp === 'function') return;

    type TypeCurrentProp = keyof typeof currentProp;

    currentProp[method as TypeCurrentProp](flag);
  }
}
