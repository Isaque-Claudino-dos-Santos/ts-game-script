import InterfaceMouseDown from "./InterfaceMouseDown";

export default class MouseDown implements InterfaceMouseDown {
  public buttonID: number;
  public active: boolean = false;

  constructor(private elementRef: HTMLElement) {
    this.instanceEvent(this.elementRef);
  }

  public handlerEvent: (event: MouseEvent) => void;


  private instanceEvent(elementRef: HTMLElement) {
    elementRef.addEventListener("mousedown", this.handlerEvent);
  }
}
