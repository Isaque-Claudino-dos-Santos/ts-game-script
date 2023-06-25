import TypeShape from '@Vendor/Types/TypeShape'
import InterfaceLoop from './InterfaceLoop'
import Engine from '@Vendor/Engine'
import Scene from '@Vendor/Models/Scene'

export default interface InterfaceObject extends InterfaceLoop {
  readonly sprite: TypeShape
  readonly engine: Engine
  readonly scene: Scene | null
  index: number
  draw(): void
}
