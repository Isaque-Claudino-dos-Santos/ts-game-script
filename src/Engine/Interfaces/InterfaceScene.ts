import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'
import InterfaceGameLoop from './InterfaceGameLoop'
import Engine from '@Engine/Engine'

type Types = InterfaceGameLoop

export default interface InterfaceScene extends Types {
  readonly objects: Object<TypeSprite>[]
  readonly engine: Engine
  enable: boolean
}
