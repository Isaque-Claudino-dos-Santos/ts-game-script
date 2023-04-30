import Rect from '@Draw/Rect'
import { TypeMouseActions } from '@Event/Mouse'
import GameObject from '@Game/GameObject'
import Game from 'Game'

export default class Player extends GameObject {
  public isDown = false

  constructor(game: Game) {
    super(game)
  }

  readonly body = new Rect(this.game.canvas.context)
    .resize(30, 30)
    .reposition(30, 30)
    .setColor('#aa00ff')

  mouse0: TypeMouseActions = {
    onDown: () => {
      this.isDown = true
    },
  }

  public boot = () => {
    this.keyboard
      .create('KeyD', () => (this.body.x += 4))
      .create('KeyS', () => (this.body.y += 4))
      .create('KeyW', () => (this.body.y -= 4))
      .create('KeyA', () => (this.body.x -= 4))
    this.game.mouse.addEvents(this.body, 0, this.mouse0)
  }

  public update = () => {
    this.keyboard
      .checkPress('KeyD')
      .checkPress('KeyS')
      .checkPress('KeyW')
      .checkPress('KeyA')
  }

  public render = () => {
    this.body.render()
  }
}
