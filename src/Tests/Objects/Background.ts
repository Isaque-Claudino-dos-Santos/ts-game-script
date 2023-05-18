import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Background extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite
      .moveTo(0, 0)
      .resize(this.engine.canvas.width(), this.engine.canvas.height())
      .setColor('#00bbee')
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
