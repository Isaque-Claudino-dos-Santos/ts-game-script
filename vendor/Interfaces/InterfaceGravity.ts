import Object from '@Vendor/Models/Object'
import TypeShape from '@Vendor/Types/TypeShape'
import TypeGravityAxis from '@Vendor/Types/TypeGravityAxis'

export default interface InterfaceGravity {
  readonly object: Object<TypeShape>
  axis: TypeGravityAxis
  acceleration: number
  velocity: number
  force: number
  massa: number
  active: boolean

  setAxis(axis: TypeGravityAxis): this
  setMassa(value: number): this
  setForce(value: number): this
  reset(): this
  disable(): this
  enable(): this
  on(invert: boolean): void
}
