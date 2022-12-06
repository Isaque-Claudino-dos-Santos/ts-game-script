import Draw from "./Draw";

export default interface InterfaceDraw {
  render(): void;
  relativeWith(intanceOfDraw: Draw, x: number, y: number): void;
}
