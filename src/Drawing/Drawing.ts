import Shapes from "../Types/Shapes";
import InterfaceDrawing from "./InterfaceDrawing";

export default class Drawing implements InterfaceDrawing {
  constructor(readonly context: CanvasRenderingContext2D) {}

  public rect(dataRect: Shapes.TypeRect): Shapes.TypeRect {
    const { x, y, width, height, color, type } = dataRect;
    this.context[`${type}Style`] = color;
    this.context[`${type}Rect`](x, y, width, height);
    this.context[type]();
    return dataRect;
  }

  public image(dataImage: Shapes.TypeImage): Shapes.TypeImage {
    const {
      imageElement,
      x,
      y,
      width,
      height,
      imageX,
      imageY,
      imageWidth,
      imageHeight,
    } = dataImage;
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
    return dataImage;
  }
}
