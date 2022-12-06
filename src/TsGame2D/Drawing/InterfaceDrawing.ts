import TypeShapes from "../Types/TypeShapes";
import DrawRect from "./DrawRect";
import DrawImage from "./DrawImage";

export default interface InterfaceDrawing {
  readonly context: CanvasRenderingContext2D;

  rect(dataRect?: Partial<TypeShapes.Rect>): DrawRect;
  image(dataImage?: Partial<TypeShapes.Image>): DrawImage;
}
