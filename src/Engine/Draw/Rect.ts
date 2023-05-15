import Shape from '@Engine/Modules/Shape'
import InterfaceRect from '@Engine/Interfaces/InterfaceRect'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'

export default class Rect extends Shape implements InterfaceRect {
  readonly shape: TypeShape = 'rect'
  width: number = 10
  height: number = 10

  centerX(): number {
    return this.x + this.width / 2
  }

  centerY(): number {
    return this.y + this.height / 2
  }

  resize(width: number, height: number): this {
    this.width = width
    this.height = height
    return this
  }

  originX(): number {
    return this.originPointX === 'center'
      ? this.width / 2
      : this.originPointX === 'left'
      ? 0
      : this.originPointX === 'right'
      ? this.width
      : 0
  }

  originY(): number {
    return this.originPointY === 'center'
      ? this.height / 2
      : this.originPointY === 'top'
      ? 0
      : this.originPointY === 'bottom'
      ? this.height
      : 0
  }

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX(), this.y + this.originY())
    context.rotate(this.angle)
    context[`${this.paint}Style`] = this.color
    context[`${this.paint}Rect`](
      -this.originX(),
      -this.originY(),
      this.width,
      this.height
    )
    context.closePath()
    context.restore()
    return this
  }
}
