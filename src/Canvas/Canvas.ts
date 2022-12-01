import Size from '../Types/Size';
import InterfaceCanvas from './InterfaceCanvas'

export default class Canvas implements InterfaceCanvas {
  public element: HTMLCanvasElement;

  constructor() {
    this.createElement();
    this.appendInElement("body");
  }

  private createElement(): void {
    this.element = document.createElement("canvas");
    this.element.id = process.env.CANVAS_ELEMENT_ID ?? "";
  }

  private appendInElement(queryElement: string): void {
    const e = document.querySelector(queryElement);
    if (e) e.appendChild(this.element);
  }

  public resize(width: Size.TypeWidth, height: Size.TypeHeight): void {
    this.element.width = width;
    this.element.height = height;
  }
}
