import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import GameMyGame from './GameMyGame'

type Axis = {
  x: number
  y: number
}

export default class ObjectBox extends AbstractGameObject {
  sprite: Rect = new Rect()

  constructor(game: GameMyGame, { x, y }: Axis) {
    super(game)
    this.sprite.x(x).y(y).width(40).height(40)
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
  }
}
