import InterfaceMouseMove from "./InterfaceMouseMove";

export default class MouseMove implements InterfaceMouseMove {
  mouseX: number;
  mouseY: number;

  constructor(private elementRef: HTMLElement) {
    this.instanceEvent(elementRef);
  }

  private handlerEvent = (event: MouseEvent) => {
    const [x, y] = [event.offsetX, event.offsetY];
    this.mouseX = x;
    this.mouseY = y;
  };

  private instanceEvent(elementRef:HTMLElement) {
    elementRef.addEventListener('mousemove',this.handlerEvent)
  }
}
