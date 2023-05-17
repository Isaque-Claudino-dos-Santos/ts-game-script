import BoundingBox from '@Engine/BoundingBox'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'
import img from '@Asset/MotoBoy.png'
import Rect from '@Engine/Draw/Rect'

export default class Player extends Object<Sprite> {
  readonly sprite = new Sprite()
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite
      .resizeSource(32, 32)
      .moveTo(10, 10)
      .resize(32, 32)
      .setSourceImage(img)
    this.boundingBox.box.resize(15, 32)
    this.boundingBox.moveTo(9, 0)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
    this.boundingBox.debug(this.engine.canvas.context)
  }
}
