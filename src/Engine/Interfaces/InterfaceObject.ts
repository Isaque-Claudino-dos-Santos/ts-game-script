import TypeSprite from '@Engine/Types/TypeSprite'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Engine/Engine'

type Types = InterfaceGameLoop

export default interface InterfaceObject extends Types {
  sprite: TypeSprite
  engine: Engine

  draw(): void
}
