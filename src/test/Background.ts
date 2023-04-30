import Rect from '@Draw/Rect'
import GameObject from '@Game/GameObject'
import Game from 'Game'

export default class Background extends GameObject {
  constructor(game: Game) {
    super(game)
  }

  body = new Rect(this.game.canvas.context)
    .resize(this.game.canvas.screen.width, this.game.canvas.screen.height)
    .setColor('#232323')

  public render = () => {
    this.body.render()
  }
}
