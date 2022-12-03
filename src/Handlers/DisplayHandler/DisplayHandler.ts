import InterfaceDisplayHandler from "./InterfaceDisplayHandler";
import Canvas from "../../Canvas";
import TypeSize from "../../Types/TypeSize";

export default class DisplayHandler implements InterfaceDisplayHandler {
  private readonly canvas: Canvas = new Canvas();

  public readonly screen: HTMLCanvasElement;

  public width: TypeSize.Width;
  public height: TypeSize.Height;

  constructor() {
    this.screen = this.canvas.element;
    this.setSize({
      width: Number(process.env.CANVAS_WIDTH) ?? 300,
      height: Number(process.env.CANVAS_HEIGHT) ?? 300,
    });
  }

  getSize(): TypeSize.Size {
    return {
      width: this.width,
      height: this.height,
    };
  }

  setSize({ width, height }: TypeSize.Size): void {
    this.width = width;
    this.height = height;
    this.canvas.resize(width, height);
  }
}
