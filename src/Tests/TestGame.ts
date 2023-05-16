import Game from '@Engine/Modules/Game'
import Player from './Player'

export default class TestGame extends Game {
  readonly player = new Player(this.engine)

  init = () => {
    this.player.init()
  }

  render = () => {
    this.player.render()
  }
}
