import InterfaceMouse from "./InterfaceMouse";
import MouseDown from "./MouseDown";
import MouseUp from "./MouseUp";
import MouseMove from "./MouseMove";
import TypeMouse from "../Types/TypeMouse";

export default class Mouse implements InterfaceMouse {
  private readonly down: MouseDown;
  private readonly up: MouseUp;
  private readonly move: MouseMove;

  point: TypeMouse.Point;

  constructor(elementRef: HTMLElement) {
    this.down = new MouseDown(elementRef);
    this.up = new MouseUp(elementRef);
    this.move = new MouseMove(elementRef);

    this.down.handlerEvent = (event: MouseEvent) => {
      this.down.buttonID = event.button;
      this.down.active = true;
      this.up.active = false;
    };

    this.up.handlerEvent = (event: MouseEvent) => {
      this.up.buttonID = event.button;
      this.up.active = true;
      this.down.active = false;
    };

    this.point.x = this.move.mouseX;
    this.point.y = this.move.mouseY;
  }
}
