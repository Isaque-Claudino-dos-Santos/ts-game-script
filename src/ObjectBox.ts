import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import GameMyGame from './GameMyGame'
import BoundingBox from '@Vendor/Game2D/BoundingBox'
import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'

type Axis = {
  x: number
  y: number
}

export default class ObjectBox extends AbstractGameObject {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<AbstractGeometries2D> | null = null

  constructor(game: GameMyGame, { x, y }: Axis) {
    super(game)
    this.sprite
      .x(x)
      .y(y)
      .width(40)
      .height(40)
      .lineColor('black')
      .bgColor('')
      .lineSize(2)
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
