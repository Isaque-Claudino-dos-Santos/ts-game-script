import fs from 'fs';
import { env } from 'process';
import TypeCommand from '../../Types/TypeCommand';
import path from 'path';

export default class CommandCreate {
  object(args: TypeCommand.Flags) {
    const dir: string = path.resolve(env.APP_DIR_GAME_OBJECT ?? '');
    const file: string = `${dir}/${args.name}.ts`;
    const pathFileModule: string = './vendor/TsGameCommands/resources/modules';

    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    if (!fs.existsSync(file))
      fs.open(file, 'w', (err, f) => {
        if (err) console.log(err);

        console.log(`File ${args.name}.ts create`);
      });

    fs.readFile(pathFileModule + '/gameObject.txt', (err, data) => {
      if (err) console.log(err);

      let code: string = data.toString();
      code = code.replace(/VAR_CLASS_NAME/g, args.name);
      code = code.replace(
        /VAR_TYPE_DRAW/g,
        `Draw${args.draw.charAt(0).toLocaleUpperCase() + args.draw.slice(1)}`
      );
      code = code.replace(/VAR_METHOD_DRAW/g, args.draw);

      fs.writeFile(file, code, (err) => {
        if (err) console.log(err);
      });
    });
  }
}
