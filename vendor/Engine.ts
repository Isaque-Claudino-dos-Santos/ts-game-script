import InterfaceEngine from './Interfaces/InterfaceEngine'
import Keyboard from './Keyboard'
import Canvas2D from './Canvas2D'
import Collider from './Collider'
import Game from './Models/Game'
import Mouse from './Mouse'

export default class Engine implements InterfaceEngine {
  readonly canvas = new Canvas2D()
  readonly keyboard = new Keyboard()
  readonly mouse = new Mouse(this.canvas)
  readonly collider = new Collider()
  private game: Game | null = null

  public init = (game: Game) => {
    this.game = game

    this.game.init()

    const loop = () => {
      if (!this.game) return
      this.game.update()
      this.game.collided()
      this.game.render()

      requestAnimationFrame(loop)
    }

    loop()
  }
}
