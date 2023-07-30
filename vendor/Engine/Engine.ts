import InterfaceEngine from './InterfaceEngine'
import Keyboard from '../Events/Keyboard/Keyboard'
import Canvas2D from './Modules/Canvas2D'
import Mouse from '../Events/Mouse/Mouse'
import Game from '@Vendor/Models/Game'
import Render from './Modules/Render/Render'

export default class Engine implements InterfaceEngine {
  readonly canvas = new Canvas2D()
  readonly keyboard = new Keyboard()
  readonly mouse = new Mouse(this.canvas)
  readonly render = new Render(this)

  private game: Game | null = null

  public init = (game: Game) => {
    this.game = game

    this.game.init()

    const loop = () => {
      if (!this.game) return
      this.game.update()
      this.render.all()

      requestAnimationFrame(loop)
    }

    loop()
  }
}
