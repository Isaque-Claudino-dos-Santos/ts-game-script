import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Vendor/Engine'
import TypeSceneObjects from '@Vendor/Types/TypeSceneObjects'

type Types = InterfaceGameLoop

export default interface InterfaceScene extends Types {
  readonly objects: TypeSceneObjects
  readonly engine: Engine
  enable: boolean

  callInits(): void
  callUpdates(): void
  callRenders(): void
  callCollideds(): void
}
