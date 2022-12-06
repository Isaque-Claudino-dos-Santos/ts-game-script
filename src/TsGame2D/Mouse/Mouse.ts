import InterfaceMouse from "./InterfaceMouse";
import TypeMouse from "../Types/TypeMouse";

export default class Mouse implements InterfaceMouse {
  public point: TypeMouse.Point = { x: 0, y: 0 };
  public isDown: boolean = false;
  public button: number;
  constructor(private readonly elementRef: HTMLElement) {
    this.elementRef.onmousedown = (event: MouseEvent) => {
      this.button = event.button;
      this.isDown = true;
    };

    this.elementRef.onmouseup = (event: MouseEvent) => {
      this.button = event.button;
      this.isDown = false;
    };

    this.elementRef.onmousemove = (event: MouseEvent) => {
      const [x, y] = [event.offsetX, event.offsetY];
      this.point.x = x;
      this.point.y = y;
    };
  }
}
