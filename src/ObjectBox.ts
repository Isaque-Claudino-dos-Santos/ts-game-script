import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import BoundingBox from '@Vendor/Game2D/BoundingBox'

type Axis = {
  x: number
  y: number
}

export default class ObjectBox extends AbstractGameObject {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.width(40).height(40).lineColor('black').bgColor('').lineSize(2)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
