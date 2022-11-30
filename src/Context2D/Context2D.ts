import InterfaceContext2D from './InterfaceContext2D'

export default class Context2d implements InterfaceContext2D {
  readonly context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.context = this.getContext(canvas);
  }

  private getContext(canvas: HTMLCanvasElement):CanvasRenderingContext2D {
    const context = canvas.getContext('2d');
    if(context) return context
  }
}
 
