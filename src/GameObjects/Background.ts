import TsGame2D from "../TsGame2D";
import DrawRect from "../TsGame2D/Drawing/DrawRect";
export default class Background {
  private readonly draw: DrawRect;

  constructor(private readonly tsg: TsGame2D) {
    this.draw = tsg.draw.rect({
      ...tsg.display.getSize(),
      x: 0,
      y: 0,
      color: "black",
    });
  }

  render() {
    this.draw.render()
  }
}
