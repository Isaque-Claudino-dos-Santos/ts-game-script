import TsGame2D from "../TsGame2D";
import DrawArc from "../TsGame2D/Drawing/DrawArc";

export default class Bullet {
  private readonly draw: DrawArc;

  constructor(private tsg: TsGame2D) {
    this.draw = this.tsg.draw.arc({
      color: "purple",
      x: 100,
      y: 100,
      radius: 3
    });
  }

  public render(): void {
    this.draw.render();
  }
}
