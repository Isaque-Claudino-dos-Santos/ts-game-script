import Canvas from '../Canvas';
import Context2d from '../Context2D';
import Drawing from '../Drawing';

export default class Game2D {
  constructor(
    private canvas: Canvas,
    private context2d: Context2d,
    private draw: Drawing
  ) {}

  public endRules() {
    this.loop();
  }

  private update = () => {};

  private render = () => {};

  private loop = () => {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  };
}
