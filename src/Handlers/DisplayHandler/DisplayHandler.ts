import InterfaceDisplayHandler from "./InterfaceDisplayHandler";
import Canvas from "../../Canvas";
import Size from "../../Types/Size";

export default class DisplayHandler implements InterfaceDisplayHandler {
  private readonly canvas: Canvas = new Canvas();

  public readonly screen: HTMLCanvasElement;

  public width: Size.TypeWidth;
  public height: Size.TypeHeight;

  constructor() {
    this.screen = this.canvas.element;
    this.setSize({
      width: Number(process.env.CANVAS_WIDTH) ?? 300,
      height: Number(process.env.CANVAS_HEIGHT) ?? 300
    })
  }

  getSize(): Size.TypeSize {
    return {
      width: this.width,
      height: this.height,
    };
  }

  setSize({ width, height }: Size.TypeSize): void {
    this.width = width;
    this.height = height;
    this.canvas.resize(width,height)
  }
}
