import TypeShape from '@Vendor/Types/TypeShape'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Vendor/Engine'
import BoundingBox from '@Vendor/BoundingBox'

type Types = InterfaceGameLoop

export default interface InterfaceObject extends Types {
  readonly sprite: TypeShape
  readonly boundingBox: BoundingBox<TypeShape> | undefined
  readonly engine: Engine

  draw(): void
}
