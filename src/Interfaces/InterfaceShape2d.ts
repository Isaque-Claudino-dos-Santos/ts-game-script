export type TypeShapeType = 'fill' | 'stroke'

export default interface InterfaceShape2d {
  x: number
  y: number
  color: string
  type: TypeShapeType

  draw(context: CanvasRenderingContext2D): this
  setColor(color: string): this
  reposition(x: number, y: number): this
  setType(type: TypeShapeType): this
}
