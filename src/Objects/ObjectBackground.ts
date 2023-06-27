import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Geometries/Rect'

export default class ObjectBackground extends Object<Rect> {
  sprite: Rect = new Rect()

  init = () => {
    const canvas = this.engine.canvas
    this.sprite
      .resize(canvas.width(), canvas.height())
      .moveTo(0, 0)
      .setColor('#121212')
  }
}
