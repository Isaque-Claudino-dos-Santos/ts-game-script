import BoundingBox from '@Engine/BoundingBox'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'
import img from '@Asset/MotoBoy.png'
import Rect from '@Engine/Draw/Rect'

export default class Player extends Object<Sprite> {
  readonly sprite = new Sprite()
    .resizeSource(32, 32)
    .moveTo(10, 10)
    .resize(32, 32)
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(
    this,
    new Rect().resize(15, 32)
  ).moveTo(8, 0)

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
