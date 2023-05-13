import InterfaceBoundingBox from '@Interface/InterfaceBoundingBox'
import TypeSprite from '@Type/TypeSprite'
import Rect from './Draw/Rect'

export default class BoundingBox implements InterfaceBoundingBox {
  constructor(public box: TypeSprite, public parent: TypeSprite) {
    this.box.setPaint('stroke').setColor('#ff0000')
  }

  update() {
    if (this.box.shape === 'rect') {
      const box = this.box as Rect
      this.box.x = this.parent.x - box.width / 2
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
