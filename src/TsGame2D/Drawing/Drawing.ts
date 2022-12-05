import TypeShapes from "../Types/TypeShapes";

import InterfaceDrawing from "./InterfaceDrawing";

export default class Drawing implements InterfaceDrawing {
  constructor(readonly context: CanvasRenderingContext2D) {}

  public rect(dataRect: TypeShapes.Rect): TypeShapes.Rect {
    const { x, y, width, height, color, type } = dataRect;
    this.context[`${type}Style`] = color;
    this.context[`${type}Rect`](x, y, width, height);
    this.context[type]();
    return dataRect;
  }

  public image(dataImage: TypeShapes.Image): TypeShapes.Image {
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
