import Loop from '@Vendor/Events/Loop'
import AbstractGame from '@Vendor/Game2D/AbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'

export default interface InterfaceEngine2D {
  readonly canvas: Canvas2D
  readonly loop: Loop

  initialize(game: AbstractGame, callback: Function): void
}
