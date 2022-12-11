import TsGame2D from '../../vendor/TsGame2D';
import DrawRect from '../../vendor/TsGame2D/Drawing/DrawRect';

export default class Player {
  public readonly body: DrawRect;

  constructor(private readonly tsg: TsGame2D) {
    this.body = this.tsg.draw.rect({
      x: 10,
      y: 10,
      width: 30,
      height: 30,
      color: 'blue',
    });
  }

  public update(): void {}

  public render(): void {
    this.body.render();
  }
}
