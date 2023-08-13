import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'

export default class ObjectPlayer extends AbstractGameObject {
  sprite = new Rect()
  speedX = 3
  speedY = 3

  moviment() {
    const key = this.game.keyboard
    if (key.check('ArrowRight')) this.sprite.x(this.sprite.x() + this.speedX)
    if (key.check('ArrowLeft')) this.sprite.x(this.sprite.x() - this.speedX)
    if (key.check('ArrowUp')) this.sprite.y(this.sprite.y() - this.speedY)
    if (key.check('ArrowDown')) this.sprite.y(this.sprite.y() + this.speedY)
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
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
