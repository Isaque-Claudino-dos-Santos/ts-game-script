import Game from '@Game/Game'
import Player from './Player'
import Background from './Background'
import FPSCounter from './FPSCounter'

export default class PacMan extends Game {
  readonly obj = {
    fpsCounter: new FPSCounter(this.engine),
    background: new Background(this.engine),
    player: new Player(this.engine),
  }

  override init = () => {
    console.log(`Game In-it ✅`)
  }

  override update = () => {
    this.obj.player.update()
    this.obj.fpsCounter.update()
  }

  override render = () => {
    this.obj.background.render()
    this.obj.player.render()
    this.obj.fpsCounter.render()
  }
}
