import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'

export type TypeGravityAxis = 'x' | 'y'

export default interface InterfaceGravity {
  readonly object: Object<TypeSprite>
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
