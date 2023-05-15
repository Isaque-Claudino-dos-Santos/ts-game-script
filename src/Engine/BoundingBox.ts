import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'

export default class BoundingBox<
  Box extends TypeSprite,
  Parent extends TypeSprite
> implements InterfaceBoundingBox
{
  constructor(public box: Box, public parent: Parent) {}

  update = () => {
    this.box.angle = this.parent.angle
    this.box.setOrigins(this.parent.originX, this.parent.originY)
    this.box.moveTo(this.parent.x, this.parent.y)
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.setPaint('stroke').setColor('#ff0000')
    this.box.draw(context)
  }
}
