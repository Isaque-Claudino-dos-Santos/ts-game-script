import InterfaceGravity from './Interfaces/InterfaceGravity'

export default class Gravity implements InterfaceGravity {
  acceleration: number = 1
  velocity: number = 0
  force: number = 1
  massa: number = 1
  enable: boolean = true

  constructor(public axis: number) {}

  setForce(value: number): this {
    this.force = value
    return this
  }

  setMassa(value: number): this {
    this.massa = value
    return this
  }

  on(invert: boolean = false): void {
    if (!this.enable) return
    this.acceleration = this.force / this.massa
    this.velocity += this.acceleration
    if (invert) this.axis -= this.velocity
    else this.axis += this.velocity
  }
}
