import InterfaceShape from '@Vendor/Interfaces/InterfaceShape'
import TypePaint from '@Vendor/Types/TypePaint'
import TypeShape from '@Vendor/Types/TypeShape'
import TypeShapeValue from '@Vendor/Types/TypeShapeValue'

export default abstract class Shape implements InterfaceShape {
  abstract readonly shape: TypeShapeValue
  x: number = 0
  y: number = 0
  fixedX: number = 0
  fixedY: number = 0
  color: string = 'black'
  paint: TypePaint = 'fill'
  angle: number = 0
  originX: number = 0
  originY: number = 0
  lineWidth: number = 1
  enable: boolean = true

  abstract draw(context: CanvasRenderingContext2D): this

  abstract copy<Copy extends TypeShape>(): Copy

  addX(value: number): this {
    this.x += value
    return this
  }

  addY(value: number): this {
    this.y += value
    return this
  }

  getOriginX(): number {
    return this.x + this.originX
  }

  getOriginY(): number {
    return this.y + this.originY
  }

  setOrigins(x: number, y: number): this {
    this.originX = x
    this.originY = y
    return this
  }

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
