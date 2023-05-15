import InterfaceShape, {
  TypeOriginPointX,
  TypeOriginPointY,
  TypePaint,
  TypeShape,
} from '@Engine/Interfaces/InterfaceShape'

export default abstract class Shape implements InterfaceShape {
  abstract readonly shape: TypeShape
  x: number = 0
  y: number = 0
  fixedX: number = 0
  fixedY: number = 0
  color: string = 'black'
  paint: TypePaint = 'fill'
  angle: number = 0

  originPointX: TypeOriginPointX = 'center'
  originPointY: TypeOriginPointY = 'center'

  abstract draw(context: CanvasRenderingContext2D): this
  abstract centerX(): number
  abstract centerY(): number

  abstract originX(): number
  abstract originY(): number

  moveTo(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  fixTo(x: number, y: number): this {
    this.fixedX = x
    this.fixedY = y
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
