import { TypeRect } from './Shapes';
export type CanvasElement = HTMLCanvasElement;
export type TypeContext2d = CanvasRenderingContext2D;

export interface InterfaceCanvas {
  screen: CanvasElement;
  width: number;
  height: number;
  resize(width: number, height: number): void;
  addBorder(color?: string, size?: number): void;
}

export interface InterfaceContext2d {
  context: TypeContext2d;
}

export interface InterfaceDrawing {
  rect(dataRect: TypeRect): void;
  clearRect(dataRect: Omit<TypeRect, 'color' | 'type'>): void;
}
