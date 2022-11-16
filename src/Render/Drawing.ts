import { TypeContext2d } from '../Types/Render';
import { InterfaceDrawing } from '../Types/Render';
import { TypeImage, TypeRect } from '../Types/Shapes';
import ShapeImage from './Shapes/ShapeImage';
import ShapeRect from './Shapes/ShapeRect';

export default class Drawing implements InterfaceDrawing {
  private context: TypeContext2d;

  constructor(context: TypeContext2d) {
    this.context = context;
  }

  public rect({
    x,
    y,
    width,
    height,
    color,
    type,
  }: TypeRect | ShapeRect): void {
    this.context[`${type}Style`] = color;
    this.context[`${type}Rect`](x, y, width, height);
    this.context[type]();
  }

  public clearRect({
    x,
    y,
    width,
    height,
  }: Omit<TypeRect, 'color' | 'type'>): void {
    this.context.clearRect(x, y, width, height);
  }

  public image({
    sourceImage,
    x,
    y,
    width,
    height,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
  }: TypeImage | ShapeImage): void {
    this.context.drawImage(
      sourceImage,
      imageX,
      imageY,
      imageWidth,
      imageHeight,
      x,
      y,
      width,
      height
    );
  }
}
