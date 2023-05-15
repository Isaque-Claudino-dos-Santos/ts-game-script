import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'

export default class BoundingBox<Box extends TypeSprite>
  implements InterfaceBoundingBox
{
  constructor(public box: Box, public parent: TypeSprite) {}

  update() {
    this.box.angle = this.parent.angle
    this.box.originPointX = this.parent.originPointX
    this.box.originPointY = this.parent.originPointY
    this.box.x = this.parent.centerX() - this.box.originX()
    this.box.y = this.parent.centerY() - this.box.originY()
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.setPaint('stroke').setColor('#ff0000')
    this.box.draw(context)
  }
}
