import CommandCreate from './CommandCreate';

export default interface InterfaceCommands {
  create: CommandCreate;
  execute(): void;
}
