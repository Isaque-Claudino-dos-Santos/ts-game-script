namespace TypeShapes {
  export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: CanvasPattern | string;
    type: "fill" | "stroke";
  };

  export type Image = {
    imageElement: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    imageX: number;
    imageY: number;
    imageWidth: number;
    imageHeight: number;
  };
}

export default TypeShapes;
