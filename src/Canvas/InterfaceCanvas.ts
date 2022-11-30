export default interface InterfaceCanvas {
  screen: HTMLCanvasElement;

  resize(width: number, height: number): void;
}
