import { InterfaceShapeArc } from '../../Types/Shapes';

export default class ShapeArc implements InterfaceShapeArc {
  typeShape: string = 'Arc';

  constructor(
    public x: number,
    public y: number,
    public radius: number = 10,
    public color: string | CanvasGradient | CanvasPattern = 'black',
    public type: 'fill' | 'stroke' = 'fill',
    public startAngle: number = 0,
    public endAngle: number = 2 * Math.PI
  ) {}
}
