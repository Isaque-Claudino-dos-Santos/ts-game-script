import BoundingBox from '@Engine/BoundingBox'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'
import img from '@Asset/MotoBoy.png'

export default class Player extends Object<Sprite> {
  readonly sprite = new Sprite()
    .resizeSource(32, 32)
    .moveTo(100, 100)
    .resize(32, 32)
  readonly boundingBox = new BoundingBox(this)

  init = () => {
    this.sprite.setSourceImage(img)
    console.log(this.sprite)
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
