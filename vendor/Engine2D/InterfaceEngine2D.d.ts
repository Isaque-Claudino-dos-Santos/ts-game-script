import Loop from '@Vendor/Events/Loop'
import AbstractGame from '@Vendor/Game2D/AbstractGame'

export default interface InterfaceEngine2D {
  readonly loop: Loop
  readonly game: AbstractGame

  initialize(callback: Function): void
}
