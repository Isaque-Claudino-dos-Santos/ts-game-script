import Engine from '@Vendor/Engine'
import { TypeSceneObjects } from './TypesScene'

export default interface InterfaceScene {
  readonly objects: TypeSceneObjects
  readonly engine: Engine
  enable: boolean

  callInits(): void
  callUpdates(): void
}
