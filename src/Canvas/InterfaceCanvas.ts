export default interface InterfaceCanvas {
  element: HTMLCanvasElement;

  resize(width: number, height: number): void;
}
