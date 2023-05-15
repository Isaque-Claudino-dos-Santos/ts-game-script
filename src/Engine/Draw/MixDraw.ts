import InterfaceMixDraw from '@Engine/Interfaces/InterfaceMixDraw'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'
import Shape from '@Engine/Modules/Shape'

export default class MixDraw extends Shape implements InterfaceMixDraw {
  readonly shape: TypeShape = 'mix'
  shapes: Shape[] = []

  copy(): MixDraw {
    return Object.assign(new MixDraw(), this)
  }

  add(shape: Shape): void {
    this.shapes.push(shape)
  }

  draw(context: CanvasRenderingContext2D): this {
    this.shapes.forEach((shape) => {
      shape.x = this.getOriginX() + shape.fixedX
      shape.y = this.getOriginY() + shape.fixedY
      shape.angle = this.angle
      shape.draw(context)
    })
    return this
  }
}
