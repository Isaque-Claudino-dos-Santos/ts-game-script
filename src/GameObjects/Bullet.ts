import TsGame2D from "../TsGame2D";
import DrawRect from "../TsGame2D/Drawing/DrawRect";
import Mesure from "../TsGame2D/Mesure";
import Enimy from "./Enimy";
export default class Bullet {
  public readonly draw: DrawRect;
  public angle: number;
  public velocity: number = 6;
  public slot: number;
  constructor(private tsg: TsGame2D) {
    this.draw = this.tsg.draw.rect({
      color: "red",
      x: 100,
      y: 100,
      width: 13,
      height: 2,
    });

    this.draw.onRotate = true;
    this.draw.originX = this.draw.width / 2;
    this.draw.originY = this.draw.height / 2;
  }

  private destroy(localStorege: Bullet[]) {
    delete localStorege[this.slot];
  }

  public checkEnimyCollider(enimy: Enimy, localStorege: Bullet[]) {
    this.tsg.collider.rect.touch(this.draw, enimy.draw, () => {
      if (enimy.draw.color == "green") return;
      enimy.draw.color = "green";
      enimy.nick.text = "! Food !";
      this.destroy(localStorege);
    });
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

  public goToTarget() {
    this.draw.x -= Math.cos(Mesure.toRadian(this.angle)) * this.velocity;
    this.draw.y -= Math.sin(Mesure.toRadian(this.angle)) * this.velocity;
    this.draw.angle = this.angle;
  }

  public render(): void {
    this.draw.render();
  }
}
