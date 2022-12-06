import Draw from "../Draw/Draw";
import InterfaceDrawText from "./InterfaceDrawText";

export default class DrawText extends Draw implements InterfaceDrawText {
  constructor(
    private context: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public size: number,
    public family: string,
    public measureUnit: "%" | "px" | "rem" | "em",
    public color: string | CanvasPattern,
    public type: "fill" | "stroke",
    public base: CanvasTextBaseline,
    public directio: CanvasDirection,
    public align: CanvasTextAlign,
    public text: string,
    public maxWidth: number
  ) {
    super()
  }

  public render(): void {
    this.context[`${this.type}Style`] = this.color;
    this.context.direction = this.directio;
    this.context.textBaseline = this.base;
    this.context.textAlign = this.align;
    this.context.font = `${this.size}${this.measureUnit} ${this.family}`;
    this.context[`${this.type}Text`](this.text, this.x, this.y, this.maxWidth);
  }
}
