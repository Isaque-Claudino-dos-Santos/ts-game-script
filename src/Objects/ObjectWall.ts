import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'

export default class ObjectWall extends Object<Rect> {
  sprite: Rect = new Rect()

  init = () => {
    this.sprite.moveTo(100, 50).resize(30, 100).setColor('#552222').setIndex(3)
  }

  update = () => {}
}
