import InterfaceShape, { TypePaint, TypeShape } from '@Interface/InterfaceShape'

export default abstract class Shape implements InterfaceShape {
  abstract readonly shape: TypeShape
  x: number = 0
  y: number = 0
  color: string = 'black'
  paint: TypePaint = 'fill'

  abstract draw(context: CanvasRenderingContext2D): this

  reposition(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  setColor(color: string): this {
    this.color = color
    return this
  }

  setPaint(paint: TypePaint): this {
    this.paint = paint
    return this
  }
}
