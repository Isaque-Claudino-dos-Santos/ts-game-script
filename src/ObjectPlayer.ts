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

  checkTime() {
    const key = this.game.keyboard

    if (key.check('Space')) {
      key.lockKey('Space')
    }
  }

  moviment() {
    this.speedX = 10
    this.speedY = 10
    const key = this.game.keyboard
    this.mvX = key.check('ArrowRight') - key.check('ArrowLeft')
    this.mvY = key.check('ArrowDown') - key.check('ArrowUp')
    let vx = this.mvX * this.speedX
    let vy = this.mvY * this.speedY

    if (this.collider.placeMeeting(vx, 0, ObjectBox)) {
      if (!this.collider.placeMeeting(Math.sign(vx), 0, ObjectBox)) {
        this.sprite.x(this.sprite.x() + Math.sign(vx))
      }
      vx = 0
    }
    this.sprite.x(this.sprite.x() + vx)

    if (this.collider.placeMeeting(0, vy, ObjectBox)) {
      if (!this.collider.placeMeeting(0, Math.sign(vy), ObjectBox)) {
        this.sprite.y(this.sprite.y() + Math.sign(vy))
      }
      vy = 0
    }

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
    this.checkTime()
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
    this.boundingBox.draw(this.game.canvas.context)
  }
}
