import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'

export default class BoundingBox<Sprite extends TypeSprite>
  implements InterfaceBoundingBox
{
  readonly box: Sprite
  readonly sprite: Sprite

  constructor(sprite: Sprite) {
    this.sprite = sprite
    this.box = this.sprite.copy() as Sprite
    this.box.setPaint('stroke').setColor('#ff55ff')
  }

  update = () => {
    this.box.setOrigins(this.sprite.originX, this.sprite.originY)
    this.box.moveTo(this.sprite.x, this.sprite.y)
    this.box.angle = this.sprite.angle
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.draw(context)
  }
}
