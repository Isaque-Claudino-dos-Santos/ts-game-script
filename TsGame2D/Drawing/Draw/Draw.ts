import TypeDraw from "../../Types/TypeDraw";
import InterfaceDraw from "./InterfaceDraw";

export default abstract class Draw implements InterfaceDraw {
  abstract x: number;
  abstract y: number;

  abstract render(): void;

  public relativeWith(
    instanceOfDraw: TypeDraw.Position,
    ajustX: number = 0,
    ajustY: number = 0
  ): void {
    const { x, y } = instanceOfDraw;

    this.x = x + ajustX;
    this.y = y + ajustY;
  }
}
