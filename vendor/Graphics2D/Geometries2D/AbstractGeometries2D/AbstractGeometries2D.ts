import InterfaceAbstractGeometries2D from './InterfaceAbstractGeometries2D'
import is from '@Vendor/utils/is'
import { DrawCallback } from './TypesGeometries2D'

export default abstract class AbstractGeometries2D
  implements InterfaceAbstractGeometries2D
{
  posX: number = 0
  posY: number = 0
  pivotX: number = 0
  pivotY: number = 0
  fillColor: string | null = null
  strokeColor: string | null = 'black'
  lineWidth: number = 1

  x(): number
  x(posX: number): this
  x(posX?: unknown): number | this {
    if (is.number(posX)) {
      this.posX = posX
      return this
    }
    return this.posX
  }

  y(): number
  y(posY: number): this
  y(posY?: unknown): number | this {
    if (is.number(posY)) {
      this.posY = posY
      return this
    }
    return this.posY
  }

  originX(): number
  originX(pivotX: number): this
  originX(pivotX?: unknown): number | this {
    if (is.number(pivotX)) {
      this.pivotX = pivotX
      return this
    }
    return this.posX + this.pivotX
  }

  originY(): number
  originY(pivotY: number): this
  originY(pivotY?: unknown): number | this {
    if (is.number(pivotY)) {
      this.pivotY = pivotY
      return this
    }
    return this.posY + this.pivotY
  }

  bgColor(): string | null
  bgColor(color: string | null): this
  bgColor(color?: unknown): string | this | null {
    if (is.string(color)) {
      this.fillColor = color
      return this
    }
    return this.fillColor
  }

  lineColor(): string
  lineColor(color: string | null): this
  lineColor(color?: unknown): string | this | null {
    if (is.string(color)) {
      this.strokeColor = color
      return this
    }
    return this.strokeColor
  }

  lineSize(): number
  lineSize(lineWidth: number): this
  lineSize(lineWidth?: unknown): number | this {
    if (is.number(lineWidth)) {
      this.lineWidth = lineWidth
      return this
    }
    return this.lineWidth
  }

  abstract draw(context: CanvasRenderingContext2D, callback: DrawCallback): void
}
