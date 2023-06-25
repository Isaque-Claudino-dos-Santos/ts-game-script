import TypeShape from '@Vendor/Types/TypeShape'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Vendor/Engine'
import Scene from '@Vendor/Models/Scene'

type Types = InterfaceGameLoop

export default interface InterfaceObject extends Types {
  readonly sprite: TypeShape
  readonly engine: Engine
  readonly scene: Scene | null

  draw(): void
}
