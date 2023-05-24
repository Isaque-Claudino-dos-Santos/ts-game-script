import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'

export default interface InterfaceMixDraw {
  objects: Object<TypeSprite>[]

  add(object: Object<TypeSprite>): void
  callUpdates(): void
}
