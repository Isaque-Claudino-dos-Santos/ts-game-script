import InterfaceMixDraw from '@Engine/Interfaces/InterfaceMixDraw'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'
import Object from '@Engine/Modules/Object'
import Shape from '@Engine/Modules/Shape'
import TypeSprite from '@Engine/Types/TypeSprite'

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
