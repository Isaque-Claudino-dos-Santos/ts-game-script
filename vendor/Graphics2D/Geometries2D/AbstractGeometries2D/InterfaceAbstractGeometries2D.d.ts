import { DrawCallback } from './TypesGeometries2D'

export default interface InterfaceAbstractGeometries2D {
  posX: number
  posY: number
  pivotX: number
  pivotY: number
  fillColor: string | null
  strokeColor: string | null
  lineWidth: number

  x(): number
  x(posX: number): this

  y(): number
  y(posY: number): this

  originX(): number
  originX(pivotX: number): this

  originY(): number
  originY(pivotY: number): this

  bgColor(): string | null
  bgColor(color: string | null): this

  lineColor(): string | null
  lineColor(color: string | null): this

  lineSize(): number
  lineSize(lineWidth: number): this

  draw(context: CanvasRenderingContext2D, callback: DrawCallback): void
}
