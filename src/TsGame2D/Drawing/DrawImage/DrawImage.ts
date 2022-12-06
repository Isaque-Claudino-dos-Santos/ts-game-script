import InterfaceDrawImage from "./InterfaceDrawImage";
import Draw from "../Draw";

export default class DrawImage extends Draw implements InterfaceDrawImage {
  constructor(
    private context: CanvasRenderingContext2D,
    public imageElement: HTMLImageElement,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public imageX: number,
    public imageY: number,
    public imageWidth: number,
    public imageHeight: number
  ) {
    super()
  }

  render(): void {
    this.context.drawImage(
      this.imageElement,
      this.imageX,
      this.imageY,
      this.imageWidth,
      this.imageHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
