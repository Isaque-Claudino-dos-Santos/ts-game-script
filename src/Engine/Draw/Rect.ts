import InterfaceRect from '@Interface/InterfaceRect'
import { TypeShape } from '@Interface/InterfaceShape'
import Shape from '@Module/Shape'

export default class Rect extends Shape implements InterfaceRect {
  readonly shape: TypeShape = 'rect'
  width: number = 10
  height: number = 10
  angle: number = 0

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
