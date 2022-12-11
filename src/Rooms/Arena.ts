import TsGame2D from '../../vendor/TsGame2D';
import Player from '../Objects/Player';

export default class Menu {
  public name: string = 'arena';

  constructor(private readonly tsg: TsGame2D, private readonly player: Player) {
    tsg.room.create(this.name);
    tsg.room.setLoop(this.name, this.render, this.update);
  }

  update = () => {
    this.player.update();
  };

  render = () => {
    this.player.render();
  };
}
