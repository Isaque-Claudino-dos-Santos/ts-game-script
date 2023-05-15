import Shape from '@Engine/Modules/Shape'
import InterfaceArc from '@Engine/Interfaces/InterfaceArc'
import {
  TypeOriginPointX,
  TypeOriginPointY,
  TypeShape,
} from '@Engine/Interfaces/InterfaceShape'

export default class Arc extends Shape implements InterfaceArc {
  readonly shape: TypeShape = 'arc'
  radius: number = 5
  startAngle: number = 0
  endAngle: number = Math.PI * 180
  counterclockwise: boolean = false

  originPointX: TypeOriginPointX = 'center'
  originPointY: TypeOriginPointY = 'center'

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

  originX(): number {
    return this.originPointX === 'center'
      ? 0
      : this.originPointX === 'left'
      ? -this.radius
      : this.originPointX === 'right'
      ? this.radius
      : 0
  }

  originY(): number {
    return this.originPointY === 'center'
      ? 0
      : this.originPointY === 'top'
      ? -this.radius
      : this.originPointY === 'bottom'
      ? this.radius
      : 0
  }

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX(), this.y + this.originY())
    context.rotate(this.angle)
    context[`${this.paint}Style`] = this.color
    context.arc(
      this.originX(),
      this.originY(),
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
