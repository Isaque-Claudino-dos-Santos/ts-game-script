import TsGame2D from "../TsGame2D";
import DrawRect from "../TsGame2D/Drawing/DrawRect";
import DrawText from "../TsGame2D/Drawing/DrawText";

export default class Enimy {
  private readonly draw: DrawRect;
  private readonly nick: DrawText;

  constructor(private tsg: TsGame2D) {
    this.draw = this.tsg.draw.rect({
      x: 250,
      y: 120,
      width: 30,
      height: 30,
      color: "red",
    });

    this.nick = this.tsg.draw.text({
      text: "The Enimy",
      color: "white",
    });
  }

  public update(): void {
    this.nick.relativeWith(this.draw, this.draw.width / 2, -2);
  }

  public render(): void {
    this.draw.render();
    this.nick.render();
  }
}
