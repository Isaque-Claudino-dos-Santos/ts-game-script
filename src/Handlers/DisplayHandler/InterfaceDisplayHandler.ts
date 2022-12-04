import TypeSize from "../../Types/TypeSize";
export default interface InterfaceDisplayHandler {
  readonly screen: HTMLCanvasElement;

  width: TypeSize.Width;
  height: TypeSize.Height;

  getSize(): TypeSize.Size;
  setSize(size: TypeSize.Size): void;
}
