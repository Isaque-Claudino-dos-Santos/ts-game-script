import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Object from '@Engine/Modules/Object'

export default class Boll extends Object<Arc> {
  readonly sprite = new Arc().resize(30).setColor('#aaaaaa').moveTo(100, 250)
  readonly boundingBox = new BoundingBox(this)

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
    this.boundingBox.debug(this.engine.canvas.context)
  }
}
