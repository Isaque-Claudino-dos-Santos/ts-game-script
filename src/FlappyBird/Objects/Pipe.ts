import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Pipe extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  update = () => {
    this.boundingBox.box.resize(this.sprite.width, this.sprite.height)
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
