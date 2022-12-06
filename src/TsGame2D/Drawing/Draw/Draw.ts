import InterfaceDraw from "./InterfaceDraw";

export default abstract class Draw implements InterfaceDraw {
  abstract render(): void;

  public relativeWith(intanceOfDraw: Draw, x: number, y: number): void {
    //to implement...
  }
}
