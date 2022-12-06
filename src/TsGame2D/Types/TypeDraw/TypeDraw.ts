namespace TypeDraw {
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

  export type Text = {
    x: number;
    y: number;
    size: number;
    family: string;
    measureUnit: "%" | "px" | "rem" | "em";
    color: CanvasPattern | string;
    type: "fill" | "stroke";
    base: CanvasTextBaseline;
    directio: CanvasDirection;
    align: CanvasTextAlign;
    text: string;
    maxWidth: number;
  };
}

export default TypeDraw;
