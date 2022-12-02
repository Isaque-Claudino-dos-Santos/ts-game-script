import Mouse from "../Types/Mouse";
import InterfaceMouseKey from "./InterfaceMouseKey";

export default class MouseKey implements InterfaceMouseKey {
  public readonly point: Mouse.TypeMousePoint = {
    x: 0,
    y: 0,
  };

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

  private activeEvents(elementRef: HTMLElement): void {
    elementRef.addEventListener("mousemove", this.handlerMouseMoveEvent);
  }
}
