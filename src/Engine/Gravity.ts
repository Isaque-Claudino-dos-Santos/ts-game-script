import InterfaceGravity, {
  TypeGravityAxis,
} from './Interfaces/InterfaceGravity'
import Object from './Modules/Object'
import TypeSprite from './Types/TypeSprite'

export default class Gravity implements InterfaceGravity {
  acceleration: number = 1
  velocity: number = 0
  force: number = 1
  massa: number = 1
  enable: boolean = true
  axis: TypeGravityAxis = 'y'

  constructor(public readonly object: Object<TypeSprite>) {}

  setAxis(axis: TypeGravityAxis): this {
    this.axis = axis
    return this
  }

  setForce(value: number): this {
    this.force = value
    return this
  }

  setMassa(value: number): this {
    this.massa = value
    return this
  }

  reset(): void {
    this.acceleration = 0
    this.velocity = 0
  }

  on(invert: boolean = false): void {
    if (!this.enable) return
    this.acceleration = this.force / this.massa
    this.velocity += this.acceleration
    if (invert) this.object.sprite[this.axis] -= this.velocity
    else this.object.sprite[this.axis] += this.velocity
  }
}
