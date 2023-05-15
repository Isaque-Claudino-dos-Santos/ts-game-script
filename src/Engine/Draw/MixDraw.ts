import InterfaceMixDraw from '@Engine/Interfaces/InterfaceMixDraw'
import {
  TypeOriginPointX,
  TypeOriginPointY,
  TypeShape,
} from '@Engine/Interfaces/InterfaceShape'
import Shape from '@Engine/Modules/Shape'

export default class MixDraw extends Shape implements InterfaceMixDraw {
  shape: TypeShape = 'mix'
  shapes: Shape[] = []
  originPointX: TypeOriginPointX = 'center'
  originPointY: TypeOriginPointY = 'center'
  originX(): number {
    return 0
  }

  originY(): number {
    return 0
  }

  add(shape: Shape): void {
    this.shapes.push(shape)
  }

  draw(context: CanvasRenderingContext2D): this {
    this.shapes.forEach((shape) => {
      shape.x = this.centerX() + shape.fixedX
      shape.y = this.centerY() + shape.fixedY
      shape.draw(context)
    })
    return this
  }

  centerX(): number {
    return this.x
  }

  centerY(): number {
    return this.y
  }
}
