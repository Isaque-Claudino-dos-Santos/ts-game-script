import InterfaceArc from '@Interface/InterfaceArc'
import Shape from '@Module/Shape'

export default class Arc2d extends Shape implements InterfaceArc {
  radius: number = 5
  startAngle: number = 0
  endAngle: number = Math.PI * 180
  counterclockwise: boolean = false

  draw(context: CanvasRenderingContext2D): this {
    context.beginPath()
    context[`${this.type}Style`] = this.color
    context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.counterclockwise
    )
    context[`${this.type}`]()
    context.closePath()
    return this
  }
}
