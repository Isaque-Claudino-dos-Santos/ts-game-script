import fs from 'fs';
import { env } from 'process';
import TypeCommand from '../../Types/TypeCommand';
import path from 'path';
import captalize from '../../../captalize';
import colors from 'colors';
colors.enable();

export default class CommandCreate {
  object(args: TypeCommand.Flags): void {
    if (!args.name) {
      console.log('Name object not defined'.red);
      console.log('Use flag'.green, 'name=examplaName'.blue);
      throw '';
    }

    if (!args.draw) args.draw = 'rect';

    const dir: string = path.resolve(env.APP_DIR_GAME_OBJECT ?? '');
    const file: string = `${dir}/${captalize(args.name)}.ts`;
    const pathFileModule: string = './vendor/TsGameCommands/resources/modules';

    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    if (!fs.existsSync(file))
      fs.open(file, 'w', (err, f) => {
        if (err) console.log(err);
        console.log(`File ${captalize(args.name)}.ts not exist `.yellow);
        console.log(`File ${captalize(args.name)}.ts created`.green);
      });

    fs.readFile(pathFileModule + '/gameObject.txt', (err, data) => {
      if (err) console.log(err);

      console.log('Prepare to write in file!'.yellow);
      let code: string = data.toString();
      code = code.replace(/VAR_CLASS_NAME/g, captalize(args.name));
      console.log('add class name', captalize(args.name).blue);
      code = code.replace(/VAR_TYPE_DRAW/g, `Draw${captalize(args.draw)}`);
      console.log('add type draw', `Draw${captalize(args.draw)}`.blue);
      code = code.replace(/VAR_METHOD_DRAW/g, args.draw);
      console.log('add method draw', args.draw.blue, '\n');

      fs.writeFile(file, code, (err) => {
        if (err) console.log(err);

        console.log('Game Object Create with success (:'.green, '\n');
      });
    });
  }

  room(args: TypeCommand.Flags): void {
    if (!args.name) {
      console.log('Name object not defined'.red);
      console.log('Use flag'.green, 'name=examplaName'.blue);
      throw '';
    }

    const dir: string = path.resolve(env.APP_DIR_GAME_ROOMS ?? '');
    const file: string = `${dir}/${captalize(args.name)}.ts`;
    const pathFileModule: string = './vendor/TsGameCommands/resources/modules';

    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    if (!fs.existsSync(file))
      fs.open(file, 'w', (err, f) => {
        if (err) console.log(err);
        console.log(`File ${captalize(args.name)}.ts not exist `.yellow);
        console.log(`File ${captalize(args.name)}.ts created`.green);
      });

    fs.readFile(pathFileModule + '/gameRoom.txt', (err, data) => {
      if (err) console.log(err);

      console.log('Prepare to write in file!'.yellow);
      let code: string = data.toString();
      code = code.replace(/VAR_CLASS_NAME/g, captalize(args.name));
      console.log('add class name', captalize(args.name).blue);
      code = code.replace(/VAR_ROOM_NAME/g, args.name);
      console.log('add name in room', args.name.blue);

      fs.writeFile(file, code, (err) => {
        if (err) console.log(err);

        console.log('Game Room Create with success (:'.green, '\n');
      });
    });
  }
}
