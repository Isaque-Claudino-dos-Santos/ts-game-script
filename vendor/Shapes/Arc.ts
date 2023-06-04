import Shape from '@Vendor/Models/Shape'
import InterfaceArc from '@Vendor/Interfaces/InterfaceArc'
import { TypeShape } from '@Vendor/Interfaces/InterfaceShape'

export default class Arc extends Shape implements InterfaceArc {
  readonly shape: TypeShape = 'arc'
  radius: number = 5
  startAngle: number = 0
  endAngle: number = Math.PI * 180
  counterclockwise: boolean = false

  copy<Arc>(): Arc {
    return Object.assign(new Arc(), this) as Arc
  }

  resize(size: number): this {
    this.radius = size
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
    context.arc(
      this.originX,
      this.originY,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    )
    context[`${this.paint}`]()
    context.closePath()
    context.restore()
    return this
  }
}
