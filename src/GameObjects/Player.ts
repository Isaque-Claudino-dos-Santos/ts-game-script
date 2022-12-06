import DrawRect from "../TsGame2D/Drawing/DrawRect";
import DrawText from "../TsGame2D/Drawing/DrawText";
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

    this.nick = this.tsg.draw.text({
      text: "The Player",
      color: "white",
      size: 11,
    });
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
  }
}
