import AbstractGame from '@Vendor/Game2D/AbstractGame'
import InterfaceTimer from './InterfaceTimer'

export default class Timer implements InterfaceTimer {
  active: boolean = true
  elapsed: number = 0

  constructor(readonly game: AbstractGame) {}

  onTime(sec: number): boolean {
    if (!this.active) {
      this.reset()
      return false
    }
    this.elapsed += this.game.time.deltaTime / 1000
    if (this.elapsed >= sec) {
      this.reset()
      return true
    }
    return false
  }

  disable(): void {
    this.active = false
  }

  enable(): void {
    this.active = true
  }

  toggle(): void {
    this.active = !this.active
  }

  reset(): void {
    this.elapsed = 0
  }
}
