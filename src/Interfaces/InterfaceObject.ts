import TypeSprite2d from '@Type/TypeSprite2d'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Engine/Engine'

type Types = InterfaceGameLoop

export default interface InterfaceObject extends Types {
  sprite: TypeSprite2d
  engine: Engine

  draw(): void
}
