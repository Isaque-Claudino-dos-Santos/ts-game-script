import AbstractGame from '@Vendor/Game2D/AbstractGame'

export default interface InterfaceTimer {
  readonly game: AbstractGame
  elapsed: number

  onTime(sec: number): boolean
  disable(): void
  enable(): void
  toggle(): void
  reset(): void
}
