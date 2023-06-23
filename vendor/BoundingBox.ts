import InterfaceBoundingBox from '@Vendor/Interfaces/InterfaceBoundingBox'
import TypeShape from '@Vendor/Types/TypeShape'
import Object from '@Vendor/Models/Object'
import Collided from '@Vendor/Collided'

export default class BoundingBox<Box extends TypeShape>
  implements InterfaceBoundingBox
{
  readonly box: Box
  readonly object: Object<TypeShape>
  readonly collided: Collided = new Collided()
  enable: boolean = true
  x: number = 0
  y: number = 0

  constructor(object: Object<TypeShape>, box: Box) {
    this.object = object
    this.box = box
    this.box.setPaint('stroke').setColor('#ff55ff')
  }

  moveTo(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  update = () => {
    if (!this.enable) return
    this.box.setOrigins(this.object.sprite.originX, this.object.sprite.originY)
    this.box.moveTo(
      this.object.sprite.x + this.x,
      this.object.sprite.y + this.y
    )
    this.box.angle = this.object.sprite.angle
  }

  debug(): void {
    if (!this.enable) return
    this.box.draw(this.object.engine.canvas.context)
  }
}
