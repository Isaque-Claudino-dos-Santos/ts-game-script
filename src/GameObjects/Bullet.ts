import TsGame2D from "../TsGame2D";
import DrawArc from "../TsGame2D/Drawing/DrawArc";
import Mesure from "../TsGame2D/Mesure";
export default class Bullet {
  public readonly draw: DrawArc;
  public angle: number;
  public velocity: number = 15;
  public slot: number;
  constructor(private tsg: TsGame2D) {
    this.draw = this.tsg.draw.arc({
      color: "purple",
      x: 100,
      y: 100,
      radius: 3,
    });
  }

  public goToTarget() {
    this.draw.x -= Math.cos(Mesure.toRadian(this.angle)) * this.velocity;
    this.draw.y -= Math.sin(Mesure.toRadian(this.angle)) * this.velocity;
  }

  private destroy(localStorege: Bullet[]) {
    delete localStorege[this.slot];
  }

  public ruleToDestroy(localStorege: Bullet[]) {
    if (
      this.draw.x < 0 ||
      this.draw.x > this.tsg.display.width ||
      this.draw.y < 0 ||
      this.draw.y > this.tsg.display.height
    ) {
      this.destroy(localStorege);
    }
  }

  public render(): void {
    this.draw.render();
  }
}
