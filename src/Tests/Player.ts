import BoundingBox from '@Engine/BoundingBox'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'
import img from '@Asset/MotoBoy.png'
import Rect from '@Engine/Draw/Rect'

export default class Player extends Object<Sprite> {
  readonly sprite = new Sprite()
    .resizeSource(32, 32)
    .moveTo(100, 100)
    .resize(32, 32)
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.setSourceImage(img)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
    this.boundingBox.debug(this.engine.canvas.context)
  }
}
