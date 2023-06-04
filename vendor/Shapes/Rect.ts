import Shape from '@Vendor/Models/Shape'
import InterfaceRect from '@Vendor/Interfaces/InterfaceRect'
import { TypeShape } from '@Vendor/Interfaces/InterfaceShape'

export default class Rect extends Shape implements InterfaceRect {
  readonly shape: TypeShape = 'rect'
  width: number = 10
  height: number = 10

  copy<Rect>(): Rect {
    return Object.assign(new Rect(), this) as Rect
  }

  resize(width: number, height: number): this {
    this.width = width
    this.height = height
    return this
  }

  draw(context: CanvasRenderingContext2D): this {
    if (!this.enable) return this
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX, this.y + this.originY)
    context.rotate(this.angle)
    context.lineWidth = this.lineWidth
    context[`${this.paint}Style`] = this.color
    context[`${this.paint}Rect`](
      -this.originX,
      -this.originY,
      this.width,
      this.height
    )
    context.closePath()
    context.restore()
    return this
  }
}
