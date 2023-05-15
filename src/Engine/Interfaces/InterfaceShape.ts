export type TypePaint = 'fill' | 'stroke'
export type TypeShape = 'rect' | 'arc' | 'text' | 'mix'
export type TypeOriginPointX = 'center' | 'left' | 'right'
export type TypeOriginPointY = 'center' | 'bottom' | 'top'

export default interface InterfaceShape {
  x: number
  y: number
  fixedX: number
  fixedY: number
  color: string
  paint: TypePaint
  originPointX: TypeOriginPointX
  originPointY: TypeOriginPointY
  readonly shape: TypeShape

  draw(context: CanvasRenderingContext2D): this
  centerX(): number
  centerY(): number
  originX(): number
  originY(): number
  setColor(color: string): this
  moveTo(x: number, y: number): this
  setPaint(paint: TypePaint): this
  fixTo(x: number, y: number): this
}
