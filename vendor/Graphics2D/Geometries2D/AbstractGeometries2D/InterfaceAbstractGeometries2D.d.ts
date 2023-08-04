import { DrawCallback } from './TypesGeometries2D'

export default interface InterfaceAbstractGeometries2D {
  posX: number
  posY: number
  pivotX: number
  pivotY: number
  fillColor: string
  strokeColor: string
  lineWidth: number

  x(): number
  x(posX: number): this

  y(): number
  y(posY: number): this

  originX(): number
  originX(pivotX: number): this

  originY(): number
  originY(pivotY: number): this

  bgColor(): string
  bgColor(color: string): this

  lineColor(): string
  lineColor(color: string): this

  lineSize(): number
  lineSize(lineWidth: number): this

  draw(context: CanvasRenderingContext2D, callback: DrawCallback): void
}
