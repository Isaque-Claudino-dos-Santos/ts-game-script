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
      .bgColor('#343434')
      .originX(this.sprite.halfWidth())
      .originY(this.sprite.halfHeight())
  }

  render = () => {
    this.sprite.draw(this.game.context)
  }
}
