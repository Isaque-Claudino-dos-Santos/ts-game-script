import InterfaceMixed from './InterfaceMixed'
import Object from '@Vendor/Models/Object'
import Geometry from '@Vendor/Models/Geometry'

export default class Mixed extends Geometry implements InterfaceMixed {
  objects: Object[] = []

  copy<MixDraw>(): MixDraw {
    return window.Object.assign(new Mixed(), this) as MixDraw
  }

  add(object: Object): void {
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
