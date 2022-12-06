import TypeShapes from "../Types/TypeShapes";
import DrawImage from "./DrawImage";
import DrawRect from "./DrawRect";

import InterfaceDrawing from "./InterfaceDrawing";

export default class Drawing implements InterfaceDrawing {
  constructor(readonly context: CanvasRenderingContext2D) {}

  public rect(dataRect: Partial<TypeShapes.Rect>): DrawRect {
    return new DrawRect(
      this.context,
      dataRect.x ?? 0,
      dataRect.y ?? 0,
      dataRect.width ?? 5,
      dataRect.height ?? 5,
      dataRect.color ?? "black",
      dataRect.type ?? "fill"
    );
  }

  public image(dataImage?: Partial<TypeShapes.Image>): DrawImage {
    return new DrawImage(
      this.context,
      dataImage.imageElement,
      dataImage.x ?? 0,
      dataImage.y ?? 0,
      dataImage.width ?? 30,
      dataImage.height ?? 30,
      dataImage.imageX ?? 0,
      dataImage.imageY ?? 0,
      dataImage.imageWidth ?? 100,
      dataImage.imageHeight ?? 100,
    );
  }
}
