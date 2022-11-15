export type CanvasElement = HTMLCanvasElement;

export interface InterfaceCanvas {
  screen: CanvasElement;
  width: number;
  height: number;
  resize(width: number, height: number): void;
  addBorder(color?: string, size?: number): void;
}
