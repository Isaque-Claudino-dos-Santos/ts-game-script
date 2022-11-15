import { CanvasElement, InterfaceCanvas } from '../Types/Canvas';

export default class Canvas implements InterfaceCanvas {
  public screen: CanvasElement;
  public width: number;
  public height: number;

  constructor() {
    this.createElement();
    this.appendInElement('body');
    this.resize(400, 400);
  }

  private createElement(): void {
    this.screen = document.createElement('canvas');
  }

  private appendInElement(queryElement: string): void {
    document
      .querySelector(queryElement)
      .appendChild<CanvasElement>(this.screen);
  }

  public resize(width: number, height: number): void {
    this.screen.width = width;
    this.screen.height = height;
    this.width = width;
    this.height = height;
  }

  public addBorder(color: string = 'black', size: number = 1): void {
    this.screen.style.border = `${size}px solid ${color}`;
  }
}
