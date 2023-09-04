import is from '@Vendor/utils/is'
import InterfaceVector2D from './InterfaceVector2D'

export default class Vector2D implements InterfaceVector2D {
  constructor(public posX: number, public posY: number) {}

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
      this.posY = this.posX
      return this
    }
    return this.posX
  }

  distance(dot1: number, dot2: number): number {
    return dot1 - dot2
  }
}
