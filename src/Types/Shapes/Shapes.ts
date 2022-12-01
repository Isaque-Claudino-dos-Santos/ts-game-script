namespace Shapes {
  export type TypeRect = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: CanvasPattern | string;
    type: "fill" | "stroke";
  };

  export type TypeImage = {
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

export default Shapes