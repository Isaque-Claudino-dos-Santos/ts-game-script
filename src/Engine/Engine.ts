import InterfaceEngine, { TypeInitFN } from '@Engine/Interfaces/InterfaceEngine'
import Mouse from './Mouse'
import Game from '@Game/Game'
import Keyboard from './Keyboard'
import Canvas2D from './Canvas2D'
import Collider from './Collider'

export default class Engine implements InterfaceEngine {
  readonly canvas = new Canvas2D()
  readonly keyboard = new Keyboard()
  readonly mouse = new Mouse(this.canvas.screen)
  readonly collider = new Collider()
  private game: Game | null = null

  public init: TypeInitFN = (game: Game) => {
    this.game = game

    this.game.init()

    const loop = () => {
      if (!this.game) return
      this.game.update()
      this.game.render()

      requestAnimationFrame(loop)
    }

    loop()
  }
}
