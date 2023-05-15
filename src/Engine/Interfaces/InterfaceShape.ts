export type TypePaint = 'fill' | 'stroke'
export type TypeShape = 'rect' | 'arc' | 'text' | 'mix'

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

  readonly shape: TypeShape

  copy(): any
  draw(context: CanvasRenderingContext2D): this
  getOriginX(): number
  getOriginY(): number
  setColor(color: string): this
  setOrigins(x: number, y: number): this
  moveTo(x: number, y: number): this
  setPaint(paint: TypePaint): this
  fixTo(x: number, y: number): this
}
