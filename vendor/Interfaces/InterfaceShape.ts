import TypePaint from '@Vendor/Types/TypePaint'
import TypeShape from '@Vendor/Types/TypeShape'
import TypeShapeValue from '@Vendor/Types/TypeShapeValue'

export default interface InterfaceShape {
  x: number
  y: number
  fixedX: number
  fixedY: number
  color: string
  paint: TypePaint
  originX: number
  originY: number
  lineWidth: number
  enable: boolean
  index: number

  readonly shape: TypeShapeValue

  addX(value: number): this
  addY(value: number): this
  copy<Copy extends TypeShape>(): Copy
  draw(context: CanvasRenderingContext2D): this
  getOriginX(): number
  getOriginY(): number
  setColor(color: string): this
  setOrigins(x: number, y: number): this
  moveTo(x: number, y: number): this
  setPaint(paint: TypePaint): this
  fixTo(x: number, y: number): this
  setIndex(index: number): this
}
