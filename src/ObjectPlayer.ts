import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'

export default class ObjectPlayer extends AbstractGameObject {
  sprite = new Rect()

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
    const key = this.game.keyboard
    if (key.check('Space')) {
      this.sprite.bgColor(this.sprite.bgColor() === 'blue' ? 'red' : 'blue')
      key.lockKey('Space')
    }

    if (key.check('ArrowRight')) {
      this.sprite.x(this.sprite.x() + 3)
    }
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
