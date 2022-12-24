import InterfaceDrawArc from "./InterfaceDrawArc";
import Draw from "../Draw";

export default class DrawArc extends Draw implements InterfaceDrawArc {
  constructor(
    private context: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public radius: number,
    public startAngle: number,
    public endAngle: number,
    public type: "fill" | "stroke",
    public color: string | CanvasPattern,
    public counterclockwise: boolean
  ) {
    super();
  }

  public render(): void {
    this.context.beginPath();
    this.context[`${this.type}Style`] = this.color;
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    );
    this.context[this.type]();
    this.context.closePath();
  }
}
