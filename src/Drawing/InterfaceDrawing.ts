import Shapes from "../Types/Shapes";

export default interface InterfaceDrawing {
  readonly context: CanvasRenderingContext2D;

  rect(dataRect: Shapes.TypeRect): void;
  image(dataImage: Shapes.TypeImage): void;
}
