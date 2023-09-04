import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import BoundingBox from '@Vendor/Game2D/BoundingBox'
import ObjectBox from './ObjectBox'
import Timer from '@Vendor/Events/Timer'
import Text from '@Vendor/Graphics2D/Resources/Text'

export default class ObjectPlayer extends AbstractGameObject {
  readonly sprite = new Rect()
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  readonly timeColor = new Timer(this.game)
  readonly textName = new Text()
  speedX = 0
  speedY = 0
  mvX = 0
  mvY = 0

  checkTime() {
    const key = this.game.keyboard

    if (this.timeColor.onTime(0.8)) {
      const factoryRandom = () => Math.floor(Math.random() * 9)
      this.sprite.bgColor(
        `#${factoryRandom()}${factoryRandom()}${factoryRandom()}${factoryRandom()}${factoryRandom()}${factoryRandom()}`
      )
    }

    if (key.check('Space')) {
      this.timeColor.toggle()
      key.lockKey('Space')
    }
  }

  moviment() {
    this.speedX = 3
    this.speedY = 3
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
      .width(32)
      .height(32)
      .x(10)
      .y(10)
      .bgColor('red')
      .originX(this.sprite.halfWidth())
      .originY(this.sprite.halfHeight())

    this.textName.text(this.name).size(20).family('Cascadia Mono')
  }

  update = () => {
    this.moviment()
    this.checkTime()
    this.textName.x(this.sprite.x() - 5).y(this.sprite.y() - 5)
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
    this.textName.draw(this.game.canvas.context)
    this.boundingBox.draw(this.game.canvas.context)
  }
}
