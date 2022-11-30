import { CanvasElement, InterfaceCanvas } from "../Types/Render";

export default class Canvas implements InterfaceCanvas {
  public screen: CanvasElement;

  constructor() {
    this.createElement();
    this.appendInElement("body");
    this.resize(
      Number(process.env.CANVAS_WIDTH) ?? 400,
      Number(process.env.CANVAS_HEIGHT) ?? 400
    );
  }

  private createElement(): void {
    this.screen = document.createElement("canvas");
    this.screen.id = process.env.CANVAS_ELEMENT_ID ?? "";
  }

  private appendInElement(queryElement: string): void {
    const e = document.querySelector(queryElement);
    if (e) e.appendChild(this.screen);
  }

  public resize(width: number, height: number): void {
    this.screen.width = width;
    this.screen.height = height;
  }

  public addBorder(color: string = "black", size: number = 1): void {
    this.screen.style.border = `${size}px solid ${color}`;
  }
}
