import TypeShapes from "../Types/TypeShapes";

export default interface InterfaceDrawing {
  readonly context: CanvasRenderingContext2D;

  rect(dataRect: TypeShapes.Rect): TypeShapes.Rect;
  image(dataImage: TypeShapes.Image): TypeShapes.Image;
}
