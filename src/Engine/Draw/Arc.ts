import InterfaceArc from '@Interface/InterfaceArc'
import { TypeShape } from '@Interface/InterfaceShape'
import Shape from '@Module/Shape'

export default class Arc extends Shape implements InterfaceArc {
  readonly shape: TypeShape = 'arc'
  radius: number = 5
  startAngle: number = 0
  endAngle: number = Math.PI * 180
  counterclockwise: boolean = false

  draw(context: CanvasRenderingContext2D): this {
    context.beginPath()
    context[`${this.paint}Style`] = this.color
    context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    )
    context[`${this.paint}`]()
    context.closePath()
    return this
  }
}
