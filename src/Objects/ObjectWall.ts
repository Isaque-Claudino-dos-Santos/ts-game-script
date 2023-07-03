import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Geometries/Rect'
import BoundingBox from '@Vendor/Models/BoundingBox'

export default class ObjectWall extends Object {
  sprite: Rect = new Rect()
  bbox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.moveTo(100, 50).resize(30, 100).setColor('#552222')
  }

  update = () => {}
}
