import { InterfaceShapeRect } from '../../Types/Shapes';

export default class ShapeRect implements InterfaceShapeRect {
  typeShape: string = 'Rect';

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string | CanvasGradient | CanvasPattern = 'black',
    public type: 'fill' | 'stroke' = 'fill'
  ) {}
}
