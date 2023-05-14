import Shape from '@Engine/Modules/Shape'
import InterfaceArc from '@Engine/Interfaces/InterfaceArc'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'

export default class Arc extends Shape implements InterfaceArc {
  readonly shape: TypeShape = 'arc'
  radius: number = 5
  startAngle: number = 0
  endAngle: number = Math.PI * 180
  counterclockwise: boolean = false

  centerX(): number {
    return this.x
  }

  centerY(): number {
    return this.y
  }

  resize(size: number): this {
    this.radius = size
    return this
  }

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
