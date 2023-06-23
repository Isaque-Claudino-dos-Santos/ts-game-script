import BoundingBox from '@Vendor/BoundingBox'
import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'

export default class ObjectWall extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.moveTo(100, 50).resize(30, 100).setColor('#373300')
    this.boundingBox.box.resize(this.sprite.width, this.sprite.height)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.draw()
    this.boundingBox.debug()
  }
}
