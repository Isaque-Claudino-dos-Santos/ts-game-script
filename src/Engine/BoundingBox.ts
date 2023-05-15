import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'
import Object from './Modules/Object'
import TypeSide from './Types/TypeSide'

export default class BoundingBox<Sprite extends TypeSprite>
  implements InterfaceBoundingBox
{
  readonly box: Sprite
  readonly object: Object<Sprite>
  readonly collidedSide: TypeSide<boolean> & { any: boolean } = {
    top: false,
    bottom: false,
    left: false,
    right: false,
    any: false,
  }

  constructor(object: Object<Sprite>) {
    this.object = object
    this.box = this.object.sprite.copy()
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
