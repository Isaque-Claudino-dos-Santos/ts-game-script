import TypeDraw from "../Types/TypeDraw";
import DrawArc from "./DrawArc";
import DrawImage from "./DrawImage";
import DrawRect from "./DrawRect";
import DrawText from "./DrawText";

import InterfaceDrawing from "./InterfaceDrawing";

export default class Drawing implements InterfaceDrawing {
  constructor(private readonly context: CanvasRenderingContext2D) {}

  public rect(dataRect: Partial<TypeDraw.Rect> = {}): DrawRect {
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

  public image(dataImage: Partial<TypeDraw.Image> = {}): DrawImage {
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
      dataImage.imageHeight ?? 100
    );
  }

  public text(dataText: Partial<TypeDraw.Text> = {}): DrawText {
    return new DrawText(
      this.context,
      dataText.x ?? 0,
      dataText.y ?? 0,
      dataText.size ?? 10,
      dataText.family ?? "Arial",
      dataText.measureUnit ?? "px",
      dataText.color ?? "black",
      dataText.type ?? "fill",
      dataText.base ?? "ideographic",
      dataText.directio ?? "inherit",
      dataText.align ?? "center",
      dataText.text ?? "",
      dataText.maxWidth ?? undefined
    );
  }

  public arc(dataArc: Partial<TypeDraw.Arc> = {}): DrawArc {
    return new DrawArc(
      this.context,
      dataArc.x ?? 0,
      dataArc.y ?? 0,
      dataArc.radius ?? 5,
      dataArc.startAngle ?? 0,
      dataArc.endAngle ?? Math.PI * 2,
      dataArc.type ?? "fill",
      dataArc.color ?? "black",
      dataArc.counterclockwise ?? false
    );
  }
}
