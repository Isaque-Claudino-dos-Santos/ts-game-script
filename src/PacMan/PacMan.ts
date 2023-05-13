import Game from '@Game/Game'
import Player from './Player'
import Background from './Background'

export default class PacMan extends Game {
  readonly obj = {
    background: new Background(this.engine),
    player: new Player(this.engine),
  }

  override init = () => {
    console.log(`Game In-it ✅`)
  }

  override update = () => {
    this.obj.player.update()
  }

  override render = () => {
    this.obj.background.render()
    this.obj.player.render()
  }
}
