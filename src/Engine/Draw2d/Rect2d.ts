import InterfaceRect2d from '@Interface/InterfaceRect2d'
import Shape2d from '@Module/Shape2d'

export default class Rect2d extends Shape2d implements InterfaceRect2d {
  width: number = 10
  height: number = 10
  angle: number = 0

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.width / 2, this.y + this.height / 2)
    context.rotate(this.angle)
    context[`${this.type}Style`] = this.color
    context[`${this.type}Rect`](
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
