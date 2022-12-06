import TypeDraw from "../Types/TypeDraw";
import TypeMouse from "../Types/TypeMouse";

export default interface InterfaceMouseKey {
  point: TypeMouse.Point;

  checkClickRect(
    target: Pick<TypeDraw.Rect, "width" | "height" | "x" | "y">,
    callback: () => void,
    button: keyof TypeMouse.ButtonByName
  ): void;
}
