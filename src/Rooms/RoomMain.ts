import TsGame2D from '../../vendor/TsGame2D';
import DrawRect from '../Drawing/DrawRect';
import Fruit from '../Objects/Fruit';
import Snake from '../Objects/Snake';

export default class RoomMain {
  public name: string = 'roomMain';
  private bg: DrawRect;

  constructor(
    private readonly tsg: TsGame2D,
    private size: number,
    private snake: Snake
  ) {
    tsg.room.create(this.name);
    tsg.room.setLoop(this.name, this.render, this.update);
    tsg.room.active(this.name);

    this.bg = tsg.draw.rect({
      ...tsg.display.getSize(),
    });

    this.aplicateRule();
  }

  private aplicateRule(): void {
    this.snake.setTarget(new Fruit(this.tsg, this.size));
  }

  public update = () => {
    this.snake.update();
  };

  public render = () => {
    this.bg.render();
    this.snake.render();
  };
}
