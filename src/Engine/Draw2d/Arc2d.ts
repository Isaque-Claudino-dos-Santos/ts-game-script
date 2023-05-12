import InterfaceArc2d from '@Interface/InterfaceArc2d'
import Shape2d from '@Module/Shape2d'

export default class Arc2d extends Shape2d implements InterfaceArc2d {
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
