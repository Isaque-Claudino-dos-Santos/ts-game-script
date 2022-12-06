import Draw from "../Draw/Draw";
import InterfaceDrawRect from "./InterfaceDrawRect";

export default class DrawRect extends Draw implements InterfaceDrawRect {
  constructor(
    private context: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string | CanvasPattern,
    public type: "fill" | "stroke"
  ) {
    super()
  }

  public render(): void {
    this.context[`${this.type}Style`] = this.color;
    this.context[`${this.type}Rect`](this.x, this.y, this.width, this.height);
    this.context[this.type]();
  }
}
