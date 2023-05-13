import InterfaceBoundingBox from '@Interface/InterfaceBoundingBox'
import TypeSprite from '@Type/TypeSprite'

export default class BoundingBox implements InterfaceBoundingBox {
  constructor(public shape: TypeSprite, public parent: TypeSprite) {}

  update = () => {
    this.shape.x = this.parent.x
    this.shape.y = this.parent.y
  }
}
