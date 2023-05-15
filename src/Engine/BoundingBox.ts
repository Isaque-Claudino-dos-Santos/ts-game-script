import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'

export default class BoundingBox<Box extends TypeSprite>
  implements InterfaceBoundingBox
{
  constructor(public box: Box, public parent: TypeSprite) {}

  update() {
    this.box.angle = this.parent.angle
    this.box.setOrigins(this.parent.originX, this.parent.originY)
    this.box.moveTo(this.parent.getOriginX(), this.parent.getOriginY())
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.setPaint('stroke').setColor('#ff0000')
    this.box.draw(context)
  }
}
