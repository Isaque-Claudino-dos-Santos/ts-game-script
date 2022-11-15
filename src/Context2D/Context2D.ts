import { InterfaceContext2d, TypeContext2d } from '../Types/Context2D';
import { CanvasElement } from '../Types/Canvas';

export default class Context2d implements InterfaceContext2d {
  context: TypeContext2d;

  constructor(canvas: CanvasElement) {
    this.saveContext(canvas);
  }

  private saveContext(canvas: CanvasElement) {
    const context = canvas.getContext('2d');
    if (context) this.context = context;
  }
}
