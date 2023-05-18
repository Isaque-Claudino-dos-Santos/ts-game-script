import Game from '@Engine/Modules/Game'
import Player from './Player'
import Background from './Background'

export default class TestGame extends Game {
  readonly background = new Background(this.engine)
  readonly player = new Player(this.engine)

  init = () => {
    this.background.init()
    this.player.init()
  }

  update = () => {
    this.player.update()
  }

  render = () => {
    this.background.render()
    this.player.render()
  }
}
