namespace TypeDraw {
  export type Position = {
    x: number;
    y: number;
  };

  export type Rect = {
    width: number;
    height: number;
    color: CanvasPattern | string;
    type: "fill" | "stroke";
  } & Position;

  export type Image = {
    imageElement: HTMLImageElement;
    width: number;
    height: number;
    imageX: number;
    imageY: number;
    imageWidth: number;
    imageHeight: number;
  } & Position;

  export type Text = {
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
  } & Position;

  export type Arc = {
    radius: number;
    startAngle: number;
    endAngle: number;
    counterclockwise: boolean;
    type: "fill" | "stroke";
    color: CanvasPattern | string;
  } & Position;
}

export default TypeDraw;
