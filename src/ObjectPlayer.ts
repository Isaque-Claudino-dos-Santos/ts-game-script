import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import BoundingBox from '@Vendor/Game2D/BoundingBox'
import ObjectBox from './ObjectBox'

export default class ObjectPlayer extends AbstractGameObject {
  readonly sprite = new Rect()
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  speedX = 0
  speedY = 0
  mvX = 0
  mvY = 0

  moviment() {
    this.speedX = 1
    this.speedY = 1
    const key = this.game.keyboard
    this.mvX = key.check('ArrowRight') - key.check('ArrowLeft')
    this.mvY = key.check('ArrowDown') - key.check('ArrowUp')
    const vx = this.mvX * this.speedX
    const vy = this.mvY * this.speedY

    if (this.collider.placeMeeting(this.speedX * this.mvX, 0, ObjectBox)) {
      this.sprite.x(this.sprite.x() - vx)
    }

    if (this.collider.placeMeeting(0, this.speedY * this.mvY, ObjectBox)) {
      this.sprite.y(this.sprite.y() - vy)
    }

    this.sprite.x(this.sprite.x() + vx)
    this.sprite.y(this.sprite.y() + vy)
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
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
    this.boundingBox.draw(this.game.canvas.context)
  }
}
