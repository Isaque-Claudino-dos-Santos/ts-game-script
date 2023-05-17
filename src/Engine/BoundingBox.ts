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

  constructor(object: Object<TypeSprite>, box: Box) {
    this.object = object
    this.box = box
    this.box.setPaint('stroke').setColor('#ff55ff')
  }

  update = () => {
    this.box.setOrigins(this.object.sprite.originX, this.object.sprite.originY)
    this.box.moveTo(this.object.sprite.x, this.object.sprite.y)
    this.box.angle = this.object.sprite.angle
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.draw(context)
  }
}
