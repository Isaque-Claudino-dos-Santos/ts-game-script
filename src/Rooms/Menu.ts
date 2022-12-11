import TsGame2D from '../../vendor/TsGame2D';

export default class Menu {
  public name: string = 'menu';

  constructor(private readonly tsg: TsGame2D) {
    tsg.room.create(this.name);
    tsg.room.setLoop(this.name, this.render, this.update);
    tsg.room.active(this.name);
  }

  update = () => {
    this.tsg.mouse.onDown(() => {
      this.tsg.room.active('arena');
    });
  };

  render = () => {};
}
