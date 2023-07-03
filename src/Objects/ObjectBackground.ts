import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Geometries/Rect'
import BoundingBox from '@Vendor/Models/BoundingBox'

export default class ObjectBackground extends Object {
  sprite: Rect = new Rect()
  bbox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    const canvas = this.engine.canvas
    this.sprite
      .resize(canvas.width(), canvas.height())
      .moveTo(0, 0)
      .setColor('#121212')
  }
}
