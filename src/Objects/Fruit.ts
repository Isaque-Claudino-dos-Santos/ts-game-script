import TsGame2D from '../../vendor/TsGame2D';
import DrawRect from '../../vendor/TsGame2D/Drawing/DrawRect';

export default class Fruit {
  public readonly body: DrawRect;

  constructor(private readonly tsg: TsGame2D, private readonly size: number) {
    this.body = this.tsg.draw.rect({
      x: this.randomPosition(),
      y: this.randomPosition(),
      width: size,
      height: size,
      color: 'green',
    });
  }

  private randomPosition(): number {
    return Math.floor(Math.random() * this.tsg.display.width);
  }

  public update(): void {}

  public render(): void {
    this.body.render();
  }
}
