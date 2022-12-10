import TypeDraw from "../../Types/TypeDraw";

export default interface InterfaceDrawRect extends TypeDraw.Rect {
  onRotate: boolean;
  originX: number;
  originY:number
  render(): void;
}
