import DrawRect from "../TsGame2D/Drawing/DrawRect";
import DrawText from "../TsGame2D/Drawing/DrawText";
import Mesure from "../TsGame2D/Mesure";
import TsGame2D from "../TsGame2D/TsGame2D";
import Bullet from "./Bullet";
import Enimy from "./Enimy";

export default class Player {
  public readonly draw: DrawRect;
  private readonly nick: DrawText;

  private readonly bullets: Bullet[] = [];

  constructor(private tsg: TsGame2D, private enimy: Enimy) {
    this.draw = this.tsg.draw.rect({
      x: 10,
      y: 10,
      width: 30,
      height: 30,
      color: "blue",
    });

    this.draw.onRotate = true;
    this.draw.originX = this.draw.width / 2;
    this.draw.originY = this.draw.height / 2;

    this.nick = this.tsg.draw.text({
      text: "The Player",
      color: "white",
    });
  }

  shoot() {
    const mouse = this.tsg.mouse;

    mouse.onClick(() => {
      const bullet = new Bullet(this.tsg);
      bullet.draw.x = this.draw.x + this.draw.originX;
      bullet.draw.y = this.draw.y + this.draw.originY;
      bullet.angle = this.draw.angle;
      bullet.slot = this.bullets.length;
      this.bullets.push(bullet);
    });
  }

  mirar() {
    const catX = Mesure.cathetus(
      this.draw.x + this.draw.width / 2,
      this.tsg.mouse.point.x
    );
    const catY = Mesure.cathetus(
      this.draw.y + this.draw.height / 2,
      this.tsg.mouse.point.y
    );
    const angle = Math.atan2(catY, catX);

    this.draw.angle = Mesure.toDeg(angle);
  }

  freeMoviment(): void {
    const press = this.tsg.keyBoard.press;
    const vel = 2;
    if (press.check("d")) this.draw.x += vel;
    if (press.check("a")) this.draw.x -= vel;
    if (press.check("s")) this.draw.y += vel;
    if (press.check("w")) this.draw.y -= vel;
  }

  render(): void {
    this.draw.render();
    this.nick.render();

    this.bullets.forEach((b) => b.render());
  }

  update(): void {
    this.mirar();
    this.freeMoviment();
    this.nick.relativeWith(this.draw, this.draw.width / 2, -2);
    this.shoot();
    this.bullets.forEach((b) => {
      b.checkEnimyCollider(this.enimy,this.bullets);
      b.ruleToDestroy(this.bullets);
      b.goToTarget();
    });
  }
}
