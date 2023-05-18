import TypeSprite from '@Engine/Types/TypeSprite'

export type TypePaint = 'fill' | 'stroke'
export type TypeShape = 'rect' | 'arc' | 'text' | 'mix' | 'image'

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

  readonly shape: TypeShape

  addX(value: number): this
  addY(value: number): this
  copy<Copy extends TypeSprite>(): Copy
  draw(context: CanvasRenderingContext2D): this
  getOriginX(): number
  getOriginY(): number
  setColor(color: string): this
  setOrigins(x: number, y: number): this
  moveTo(x: number, y: number): this
  setPaint(paint: TypePaint): this
  fixTo(x: number, y: number): this
}
