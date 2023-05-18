import TypeSprite from '@Engine/Types/TypeSprite'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Engine/Engine'
import BoundingBox from '@Engine/BoundingBox'

type Types = InterfaceGameLoop

export default interface InterfaceObject extends Types {
  readonly sprite: TypeSprite
  readonly boundingBox: BoundingBox<TypeSprite> | undefined
  readonly engine: Engine

  draw(): void
}
