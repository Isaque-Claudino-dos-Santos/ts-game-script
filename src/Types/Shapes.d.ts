export type TypeRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string | CanvasGradient | CanvasPattern;
  type: 'fill' | 'stroke';
};

export type TypeArc = {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  color: string | CanvasGradient | CanvasPattern;
  type: 'fill' | 'stroke';
};

export type TypeImage = {
  sourceImage: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  imageX: number;
  imageY: number;
  imageWidth: number;
  imageHeight: number;
};

export interface InterfaceShapeRect extends TypeRect {
  typeShape: string;
}
export interface InterfaceShapeArc extends TypeArc {
  typeShape: string;
}
export interface InterfaceShapeImage extends TypeImage {
  typeShape: string;
  path: string;
}

export type TypeShapes =
  | InterfaceShapeRect
  | InterfaceShapeArc
  | InterfaceShapeImage;
