import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'
import Object from './Modules/Object'
import Collided from './Collided'

export default class BoundingBox<Box extends TypeSprite>
  implements InterfaceBoundingBox
{
  readonly box: Box
  readonly object: Object<TypeSprite>
  readonly collided: Collided = new Collided()
  enable: boolean = true
  x: number = 0
  y: number = 0

  constructor(object: Object<TypeSprite>, box: Box) {
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

  debug(context: CanvasRenderingContext2D): void {
    if (!this.enable) return
    this.box.draw(context)
  }
}
