import { TypeImage, TypeRect } from './Shapes';
export type CanvasElement = HTMLCanvasElement;
export type TypeContext2d = CanvasRenderingContext2D;



export interface InterfaceDrawing {
  rect(dataRect: TypeRect): void;
  clearRect(dataRect: Omit<TypeRect, 'color' | 'type'>): void;
  image(dataImage: TypeImage): void;
}
