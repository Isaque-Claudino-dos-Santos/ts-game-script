import InterfaceEngine, { TypeInitFN } from '@Interface/InterfaceEngine'
import Window from '@Module/Window'
import Mouse from './Mouse'
import Game from '@Game/Game'
import Keyboard from './Keyboard'

export default class Engine implements InterfaceEngine {
  private secondsPassed: number = 0
  private oldTimeStamp: number = 0
  readonly mouse: Mouse
  readonly context2d: CanvasRenderingContext2D
  readonly keyboard: Keyboard
  game: Game | undefined
  fps: number = 0

  constructor(public readonly window: Window) {
    this.context2d = this.window.context2d
    this.mouse = new Mouse(this.window.screen)
    this.keyboard = new Keyboard()
  }

  init: TypeInitFN = () => {
    if (!this.game) throw console.error(new Error('Game in engine not defined'))

    this.game.init()
    const loop = (timeStamp: number = 0) => {
      this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000
      this.oldTimeStamp = timeStamp
      this.fps = Math.round(1 / this.secondsPassed)

      if (!this.game) return
      this.game.update()
      this.game.render()

      requestAnimationFrame(loop)
    }

    loop()
  }
}
