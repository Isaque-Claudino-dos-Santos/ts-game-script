import TsGame2D from '../../vendor/TsGame2D';
import DrawRect from '../Drawing/DrawRect';
import Snake from '../Objects/Snake';

export default class RoomMain {
  public name: string = 'roomMain';
  private bg: DrawRect;

  constructor(private readonly tsg: TsGame2D, private snake: Snake) {
    tsg.room.create(this.name);
    tsg.room.setLoop(this.name, this.render, this.update);
    tsg.room.active(this.name);

    this.bg = tsg.draw.rect({
      ...tsg.display.getSize(),
    });
  }

  public update = () => {
    this.snake.update();
  };

  public render = () => {
    this.bg.render();
    this.snake.render();
  };
}
