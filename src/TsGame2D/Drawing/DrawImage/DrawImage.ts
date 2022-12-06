import InterfaceDrawImage from "./InterfaceDrawImage";

export default class DrawImage implements InterfaceDrawImage {
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
  ) {}

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
