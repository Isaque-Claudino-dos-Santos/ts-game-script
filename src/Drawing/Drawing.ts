import { TypeContext2d } from '../Types/Context2d';
import { InterfaceDrawing, TypeRect } from '../Types/Drawing';

export default class Drawing implements InterfaceDrawing {
  private context: TypeContext2d;

  constructor(context: TypeContext2d) {
    this.context = context;
  }

  public rect({ x, y, width, height, color, type }: TypeRect): void {
    this.context[`${type}Style`] = color;
    this.context[`${type}Rect`](x, y, width, height);
    this.context[type]();
  }
}
