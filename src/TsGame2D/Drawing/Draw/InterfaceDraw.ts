import TypeDraw from "../../Types/TypeDraw";
import Draw from "./Draw";

export default interface InterfaceDraw extends TypeDraw.Position {
  render(): void;
  relativeWith(
    instanceOfDraw: TypeDraw.Position,
    ajustX?: number,
    ajustY?: number
  ): void;
}
