import Draw from "../Draw/Draw";
import InterfaceDrawRect from "./InterfaceDrawRect";
import Mesure from "../../Mesure";
import TypeDraw from "../../Types/TypeDraw";

export default class DrawRect extends Draw implements InterfaceDrawRect {
  public onRotate: boolean = false;
  public angle: number = 0;
  public originX: number = 0;
  public originY: number = 0;

  constructor(
    private context: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string | CanvasPattern,
    public type: "fill" | "stroke"
  ) {
    super();
  }

  private implementRotate(): TypeDraw.Position {
    this.context.translate(
      Mesure.center(this.x, this.width),
      Mesure.center(this.y, this.height)
    );

    this.context.rotate(Mesure.toRadian(this.angle));

    return {
      x: -this.originX,
      y: -this.originY,
    };
  }

  public render(): void {
    let x = this.x;
    let y = this.y;
    this.context.save();

    if (this.onRotate) {
      const { x: newX, y: newY } = this.implementRotate();
      x = newX;
      y = newY;
    }

    this.context[`${this.type}Style`] = this.color;
    this.context[`${this.type}Rect`](x, y, this.width, this.height);
    this.context[this.type]();

    this.context.restore();
  }
}
