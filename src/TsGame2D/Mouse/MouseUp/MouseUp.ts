import InterfaceMouseUp from "./InterfaceMouseUp";

export default class MouseUp implements InterfaceMouseUp {
  public buttonID: number;
  public active: boolean = false;

  constructor(private elementRef: HTMLElement) {
    this.instanceEvent(this.elementRef);
  }

  public handlerEvent: (event: MouseEvent) => void;

  private instanceEvent(elementRef: HTMLElement) {
    elementRef.addEventListener("mouseup", this.handlerEvent);
  }
}
