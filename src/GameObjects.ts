import TsGame2D from "../vendor/TsGame2D";
import DrawArc from "../vendor/TsGame2D/Drawing/DrawArc";

export class Player {
  public draw: DrawArc;

  constructor(private tsg: TsGame2D) {
    this.draw = tsg.draw.arc({
      x: 10,
      y: 10,
      radius: 20,
      color: "grey",
    });
  }

  moviment() {
    const press = this.tsg.keyBoard.press;
    const vel = 3;
    if (press.check("d")) this.draw.x += vel;
    if (press.check("a")) this.draw.x -= vel;
    if (press.check("w")) this.draw.y -= vel;
    if (press.check("s")) this.draw.y += vel;
  }

  render() {
    this.draw.render();
  }
}

export class Ball {
  public draw: DrawArc;

  constructor(private tsg: TsGame2D) {
    this.draw = tsg.draw.arc({
      x: 250,
      y: 150,
      radius: 20,
      color: "red",
    });
  }

  render() {
    this.draw.render();
  }
}
