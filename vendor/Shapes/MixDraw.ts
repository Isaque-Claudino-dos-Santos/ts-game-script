import InterfaceMixDraw from '@Vendor/Interfaces/InterfaceMixDraw'
import { TypeShape } from '@Vendor/Interfaces/InterfaceShape'
import Object from '@Vendor/Models/Object'
import Shape from '@Vendor/Models/Shape'
import TypeShapes from '@Vendor/Types/TypeShape'

export default class MixDraw extends Shape implements InterfaceMixDraw {
  readonly shape: TypeShape = 'mix'
  objects: Object<TypeSprite>[] = []

  copy<MixDraw>(): MixDraw {
    return window.Object.assign(new MixDraw(), this) as MixDraw
  }

  add(object: Object<TypeSprite>): void {
    this.objects.push(object)
  }

  callUpdates(): void {
    this.objects.forEach((o) => o.update())
  }

  draw(context: CanvasRenderingContext2D): this {
    if (!this.enable) return this
    this.objects.forEach(({ sprite }) => {
      sprite.x = this.getOriginX() + sprite.fixedX
      sprite.y = this.getOriginY() + sprite.fixedY
      sprite.angle = this.angle
      sprite.draw(context)
    })
    this.objects.forEach((o) => o.render())
    return this
  }
}
