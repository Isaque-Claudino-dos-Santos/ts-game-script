import InterfaceBoundingBox from '@Engine/Interfaces/InterfaceBoundingBox'
import TypeSprite from '@Engine/Types/TypeSprite'
import Rect from './Draw/Rect'

export default class BoundingBox<Box extends TypeSprite>
  implements InterfaceBoundingBox
{
  constructor(public box: Box, public parent: TypeSprite) {
    this.box.setPaint('stroke').setColor('#ff0000')
  }

  update() {
    if (this.box.shape === 'rect') {
      const box = this.box as Rect
      this.box.x = this.parent.centerX() - box.width / 2
      this.box.y = this.parent.centerY() - box.height / 2
    }

    if (this.box.shape === 'arc') {
      this.box.x = this.parent.x
      this.box.y = this.parent.y
    }
  }

  debug(context: CanvasRenderingContext2D): void {
    this.box.draw(context)
  }
}
