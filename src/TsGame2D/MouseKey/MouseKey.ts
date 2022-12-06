import TypeDraw from "../Types/TypeDraw";
import TypeMouse from "../Types/TypeMouse";
import InterfaceMouseKey from "./InterfaceMouseKey";

export default class MouseKey implements InterfaceMouseKey {
  public readonly point: TypeMouse.Point = {
    x: 0,
    y: 0,
  };

  private readonly buttonByID: TypeMouse.ButtonByID = {
    0: "LEFT",
    1: "SCROLL",
    2: "RIGHT",
    3: "SIDE_DOWN",
    4: "SIDE_UP",
  };

  private readonly buttonByName: TypeMouse.ButtonByName = {
    LEFT: 0,
    SCROLL: 1,
    RIGHT: 2,
    SIDE_DOWN: 3,
    SIDE_UP: 4,
  };

  private onClick: boolean = false;
  private currentButton: number;

  constructor(elementRef: HTMLElement) {
    this.activeEvents(elementRef);
  }

  private setPoint(x: number, y: number): void {
    this.point.x = x;
    this.point.y = y;
  }

  private handlerMouseMoveEvent = (event: MouseEvent) => {
    const [mouseX, mouseY] = [event.offsetX, event.offsetY];

    this.setPoint(mouseX, mouseY);
  };

  private handlerMouseDownEvent = (event: MouseEvent) => {
    this.currentButton = event.button;
    this.onClick = true;
  };

  private activeEvents(elementRef: HTMLElement): void {
    elementRef.addEventListener("mousemove", this.handlerMouseMoveEvent);
    elementRef.addEventListener("mousedown", this.handlerMouseDownEvent);
  }

  public checkClickRect(
    target: Pick<TypeDraw.Rect, "width" | "height" | "x" | "y">,
    callback: () => void,
    button: keyof TypeMouse.ButtonByName = "LEFT"
  ): void {
    const buttonID = this.buttonByName[button];
    const matchButton = buttonID === this.currentButton;
    const { x, y, width, height } = target;
    const { x: mx, y: my } = this.point;

    if (
      this.onClick &&
      matchButton &&
      mx > x &&
      mx < x + width &&
      my > y &&
      my < y + height
    ) {
      callback();
    }

    this.onClick = false;
    this.currentButton = undefined;
  }
}
