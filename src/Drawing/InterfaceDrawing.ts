import Shapes from "../Types/Shapes";

export default interface InterfaceDrawing {
  readonly context: CanvasRenderingContext2D;

  rect(dataRect: Shapes.TypeRect): Shapes.TypeRect;
  image(dataImage: Shapes.TypeImage): Shapes.TypeImage;
}
