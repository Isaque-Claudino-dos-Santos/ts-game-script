import BoundingBox from '@Vendor/BoundingBox'
import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'
import TypeShape from '@Vendor/Types/TypeShape'

export default class BG extends Object<Rect> {
  sprite: Rect = new Rect()
    .resize(this.engine.canvas.width(), this.engine.canvas.height())
    .setColor('#111111')
  boundingBox: BoundingBox<TypeShape> = new BoundingBox(this, new Rect())

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
