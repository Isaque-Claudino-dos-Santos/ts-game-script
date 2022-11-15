export interface InterfaceDrawing {
  rect(dataRect: TypeRect): void;
}

export type TypeRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string | CanvasGradient | CanvasPattern;
  type: 'fill' | 'stroke';
};
