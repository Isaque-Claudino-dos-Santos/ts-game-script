import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Engine/Engine'

type Types = InterfaceGameLoop
export type TypeSceneObjects = { [index: string]: Object<TypeSprite> }

export default interface InterfaceScene extends Types {
  readonly objects: TypeSceneObjects
  readonly engine: Engine
  enable: boolean

  callInits(): void
  callUpdates(): void
  callRenders(): void
  callCollideds(): void
}
