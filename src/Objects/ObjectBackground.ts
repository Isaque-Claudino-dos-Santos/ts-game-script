import BoundingBox from '@Vendor/BoundingBox'
import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'

export default class ObjectBackground extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    const canvas = this.engine.canvas
    this.sprite
      .resize(canvas.width(), canvas.height())
      .moveTo(0, 0)
      .setColor('#121212')
  }

  render = () => {
    this.draw()
  }
}
