export default interface InterfaceGeometry {
  x: number
  y: number
  fixedX: number
  fixedY: number
  color: string
  paint: 'fill' | 'stroke'
  originX: number
  originY: number
  lineWidth: number
  enable: boolean
  index: number

  addX(value: number): this
  addY(value: number): this
  copy<Copy>(): Copy
  draw(context: CanvasRenderingContext2D): this
  getOriginX(): number
  getOriginY(): number
  setColor(color: string): this
  setOrigins(x: number, y: number): this
  moveTo(x: number, y: number): this
  setPaint(paint: 'fill' | 'stroke'): this
  fixTo(x: number, y: number): this
  setIndex(index: number): this
}
