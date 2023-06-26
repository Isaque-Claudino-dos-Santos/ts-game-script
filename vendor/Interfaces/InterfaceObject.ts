import TypeShape from '@Vendor/Types/TypeShape'
import InterfaceLoop from './InterfaceLoop'
import Engine from '@Vendor/Engine'

export default interface InterfaceObject extends InterfaceLoop {
  readonly sprite: TypeShape
  readonly engine: Engine
  draw(): void
}
