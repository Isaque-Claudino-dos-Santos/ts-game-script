export type TypePaint = 'fill' | 'stroke'
export type TypeShape = 'rect' | 'arc' | 'text'

export default interface InterfaceShape {
  x: number
  y: number
  color: string
  paint: TypePaint
  readonly shape: TypeShape

  draw(context: CanvasRenderingContext2D): this
  centerX(): number
  centerY(): number
  setColor(color: string): this
  moveTo(x: number, y: number): this
  setPaint(paint: TypePaint): this
}
