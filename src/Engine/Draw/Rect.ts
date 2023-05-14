import Shape from '@Engine/Modules/Shape'
import InterfaceRect from '@Engine/Interfaces/InterfaceRect'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'

export default class Rect extends Shape implements InterfaceRect {
  readonly shape: TypeShape = 'rect'
  width: number = 10
  height: number = 10
  angle: number = 0

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

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.width / 2, this.y + this.height / 2)
    context.rotate(this.angle)
    context[`${this.paint}Style`] = this.color
    context[`${this.paint}Rect`](
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    context.closePath()
    context.restore()
    return this
  }
}
