import Size from "../../Types/Size";
export default interface InterfaceDisplayHandler {
  readonly screen: HTMLCanvasElement;

  width: Size.TypeWidth;
  height: Size.TypeHeight;

  getSize(): Size.TypeSize;
  setSize(size: Size.TypeSize): void;
}
