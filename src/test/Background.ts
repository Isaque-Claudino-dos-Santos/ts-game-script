import Rect from '@Draw/Rect'
import GameObject from '@Game/GameObject'
import Game from 'Game'
import Player from './Player'
import { TypeMouseActions } from '@Event/Mouse'

export default class Background extends GameObject {
  public player?: Player

  constructor(game: Game) {
    super(game)
  }

  body = new Rect(this.game.canvas.context)
    .resize(this.game.canvas.screen.width, this.game.canvas.screen.height)
    .setColor('#232323')

  public mouse0: TypeMouseActions = {
    onUp: () => {
      if (!this.player) return
      this.player.isDown = false
    },
    onMove: (mouse) => {
      if (!this.player || !this.player.isDown) return
      this.player.body.x = mouse.x - this.player.body.width / 2
      this.player.body.y = mouse.y - this.player.body.height / 2
    },
  }

  public boot = () => {
    this.game.mouse.addEvents(this.body, 0, this.mouse0)
  }

  public render = () => {
    this.body.render()
  }
}
