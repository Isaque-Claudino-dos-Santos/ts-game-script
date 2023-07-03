import Engine from '@Vendor/Engine'
import { TypeSceneObjects } from './TypesScene'
import Collider from '../Collider'

export default interface InterfaceScene {
  readonly objects: TypeSceneObjects
  readonly engine: Engine
  readonly collider: Collider
  enable: boolean

  callInits(): void
  callUpdates(): void
}
