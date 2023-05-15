import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Object from '@Engine/Modules/Object'

export default class Boll extends Object {
  sprite = new Arc().resize(30).setColor('#aaaaaa').moveTo(100, 250)
  bbox = new BoundingBox(this.sprite)

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
    this.bbox.debug(this.engine.canvas.context)
  }
}
