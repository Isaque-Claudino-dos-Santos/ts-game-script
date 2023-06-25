import InterfaceLoop from './InterfaceLoop'
import Engine from '@Vendor/Engine'
import TypeSceneObjects from '@Vendor/Types/TypeSceneObjects'

type Types = Omit<InterfaceLoop, 'render'>

export default interface InterfaceScene extends Types {
  readonly objects: TypeSceneObjects
  readonly engine: Engine
  enable: boolean

  callInits(): void
  callUpdates(): void
}
