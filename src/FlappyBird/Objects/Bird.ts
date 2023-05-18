import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'

export default class Bird extends Object<Sprite> {
  sprite: Sprite = new Sprite()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {}

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
