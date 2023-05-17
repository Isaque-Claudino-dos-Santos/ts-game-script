import BoundingBox from '@Engine/BoundingBox'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'
import img from '@Asset/MotoBoy.png'
import Rect from '@Engine/Draw/Rect'

export default class Player extends Object<Sprite> {
  readonly sprite = new Sprite()
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  readonly speed = { x: 1, y: 1 }

  movimentation() {
    const key = this.engine.keyboard

    if (key.check('KeyD')) {
      this.sprite.addX(this.speed.x)
    }

    if (key.check('KeyA')) {
      this.sprite.addX(-this.speed.x)
    }
  }

  init = () => {
    this.sprite
      .resizeSource(32, 32)
      .moveTo(10, 70)
      .resize(32, 32)
      .setSourceImage(img)
    this.boundingBox.box.resize(15, 32)
    this.boundingBox.moveTo(9, 0)
  }

  update = () => {
    this.movimentation()
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
