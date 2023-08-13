import AbstractGame from '@Vendor/Game2D/AbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import InterfaceEngine2D from './InterfaceEngine2D'
import Loop from '@Vendor/Events/Loop'

export default class Engine2D implements InterfaceEngine2D {
  readonly canvas: Canvas2D = new Canvas2D()
  readonly loop: Loop = new Loop()

  constructor(readonly game: AbstractGame) {}

  initialize = (callback: Function) => {
    this.loop.init = () => this.game.gameInit()
    this.loop.update = () => this.game.gameUpdate()
    this.loop.render = () => this.game.gameRender()
    this.loop.boot()
    callback()
  }
}
