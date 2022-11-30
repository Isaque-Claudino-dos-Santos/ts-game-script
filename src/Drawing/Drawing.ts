import Shapes from "../Types/Shapes";
import InterfaceDrawing from "./InterfaceDrawing";

export default class Drawing implements InterfaceDrawing {
  constructor(readonly context: CanvasRenderingContext2D) {}

  public rect({ x, y, width, height, color, type }: Shapes.TypeRect): void {
    this.context[`${type}Style`] = color;
    this.context[`${type}Rect`](x, y, width, height);
    this.context[type]();
  }

  public image({
    imageElement,
    x,
    y,
    width,
    height,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
  }: Shapes.TypeImage): void {
   
    this.context.drawImage(
      imageElement,
      imageX,
      imageY,
      imageWidth,
      imageHeight,
      x,
      y,
      width,
      height
    );


  }
}
