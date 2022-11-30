import InterfaceCanvas from './InterfaceCanvas'

export default class Canvas implements InterfaceCanvas {
  public element: HTMLCanvasElement;

  constructor() {
    this.createElement();
    this.appendInElement("body");
    this.resize(
      Number(process.env.CANVAS_WIDTH) ?? 400,
      Number(process.env.CANVAS_HEIGHT) ?? 400
    );
  }

  private createElement(): void {
    this.element = document.createElement("canvas");
    this.element.id = process.env.CANVAS_ELEMENT_ID ?? "";
  }

  private appendInElement(queryElement: string): void {
    const e = document.querySelector(queryElement);
    if (e) e.appendChild(this.element);
  }

  public resize(width: number, height: number): void {
    this.element.width = width;
    this.element.height = height;
  }
}
