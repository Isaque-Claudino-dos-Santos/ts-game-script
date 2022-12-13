import InterfaceMouse from './InterfaceMouse';
import TypeMouse from '../Types/TypeMouse';

export default class Mouse implements InterfaceMouse {
  public mouseX: number;
  public mouseY: number;
  public isDown: boolean = false;
  public click: boolean = false;
  public button: number;

  constructor(private readonly elementRef: HTMLElement) {
    this.elementRef.onmousedown = (event: MouseEvent) => {
      this.button = event.button;
      this.isDown = true;
      this.click = true;
    };

    this.elementRef.onmouseup = (event: MouseEvent) => {
      this.button = event.button;
      this.isDown = false;
    };

    this.elementRef.onmousemove = (event: MouseEvent) => {
      const [x, y] = [event.offsetX, event.offsetY];
      this.mouseX = x;
      this.mouseY = y;
    };
  }

  onClick(
    callback: (mouseX: number, mouseY: number) => void,
    button: keyof TypeMouse.ButtonByID = '0'
  ): void {
    if (this.click && this.isDown && this.button === Number(button))
      callback(this.mouseX, this.mouseY);

    this.click = false;
    this.button = undefined;
  }

  onDown(
    callback: (mouseX: number, mouseY: number) => void,
    button: keyof TypeMouse.ButtonByID = '0'
  ) {
    if (this.isDown && this.button === Number(button))
      callback(this.mouseX, this.mouseY);
  }
}
