import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import BoundingBox from '@Vendor/Game2D/BoundingBox'

export default class ObjectBox extends AbstractGameObject {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.lineColor('black').bgColor('').lineSize(2)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
