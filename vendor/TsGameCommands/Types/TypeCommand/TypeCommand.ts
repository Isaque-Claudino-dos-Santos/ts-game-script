import Commands from '../../Commands';

namespace TypeCommand {
  export type Flags = {
    [index: string]: string;
  };
  export type Actions = keyof Commands;
}

export default TypeCommand;
