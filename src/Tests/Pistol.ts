import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Pistol extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite
      .resize(16, 6)
      .setColor('#aa0000')
      .setOrigins(0, this.sprite.height / 2)
  }

  update = () => {
    const catX = this.engine.mouse.x - this.sprite.getOriginX()
    const catY = this.engine.mouse.y - this.sprite.getOriginY()

    this.sprite.angle = Math.atan2(catY, catX)
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
