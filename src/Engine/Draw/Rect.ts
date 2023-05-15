import Shape from '@Engine/Modules/Shape'
import InterfaceRect from '@Engine/Interfaces/InterfaceRect'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'

export default class Rect extends Shape implements InterfaceRect {
  readonly shape: TypeShape = 'rect'
  width: number = 10
  height: number = 10

  resize(width: number, height: number): this {
    this.width = width
    this.height = height
    return this
  }

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX, this.y + this.originY)
    context.rotate(this.angle)
    context[`${this.paint}Style`] = this.color
    context[`${this.paint}Rect`](
      -this.originX,
      -this.originY,
      this.width,
      this.height
    )
    context.closePath()
    context.restore()
    return this
  }
}
