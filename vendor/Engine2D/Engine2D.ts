import AbstractGame from '@Vendor/Game2D/AbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import InterfaceEngine2D from './InterfaceEngine2D'
import Loop from '@Vendor/Events/Loop'

export default class Engine2D implements InterfaceEngine2D {
  readonly canvas: Canvas2D = new Canvas2D()
  readonly loop: Loop = new Loop()

  initialize = (game: AbstractGame, callback: Function = () => {}) => {
    this.loop.init = () => game.gameInit()
    this.loop.update = () => game.gameUpdate()
    this.loop.render = () => game.gameRender()
    this.loop.boot()
    callback()
  }
}
