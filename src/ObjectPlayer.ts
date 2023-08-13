import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import ObjectBox from './ObjectBox'
import BoundingBox from '@Vendor/Game2D/BoundingBox'
import { ColliderData } from '@Vendor/Game2D/Collider2D'

export default class ObjectPlayer extends AbstractGameObject {
  readonly sprite = new Rect()
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  speedX = 3
  speedY = 3

  moviment() {
    const key = this.game.keyboard
    if (key.check('ArrowRight')) this.sprite.x(this.sprite.x() + this.speedX)
    if (key.check('ArrowLeft')) this.sprite.x(this.sprite.x() - this.speedX)
    if (key.check('ArrowUp')) this.sprite.y(this.sprite.y() - this.speedY)
    if (key.check('ArrowDown')) this.sprite.y(this.sprite.y() + this.speedY)
  }

  colliderWithBox(box: ObjectBox, data: ColliderData) {
    console.log('ok')
  }

  init = () => {
    this.sprite
      .width(16)
      .height(16)
      .x(10)
      .y(10)
      .bgColor('red')
      .originX(this.sprite.halfWidth())
      .originY(this.sprite.halfHeight())
  }

  update = () => {
    this.moviment()
    this.boundingBox.update()
    this.game.scenes.current().collider.rect(this, 'box', this.colliderWithBox)
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
    this.boundingBox.draw(this.game.canvas.context)
  }
}
