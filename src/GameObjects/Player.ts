import DrawRect from "../TsGame2D/Drawing/DrawRect";
import DrawText from "../TsGame2D/Drawing/DrawText";
import Mesure from "../TsGame2D/Mesure";
import TsGame2D from "../TsGame2D/TsGame2D";

export default class Player {
  private readonly draw: DrawRect;
  private readonly nick: DrawText;

  constructor(private tsg: TsGame2D) {
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

  mirar() {
    const catX = Mesure.cathetus(this.draw.originX, this.tsg.mouse.point.x);
    const catY = Mesure.cathetus(this.draw.originY, this.tsg.mouse.point.y);
    const angle = Math.atan2(catY, catX);
    console.log(catY);
    
    this.draw.angle = angle;
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
  }

  update(): void {
    this.freeMoviment();
    this.nick.relativeWith(this.draw, this.draw.width / 2, -2);
    this.mirar();
  }
}
