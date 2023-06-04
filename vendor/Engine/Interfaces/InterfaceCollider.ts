import Arc from '@Engine/Draw/Arc'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'

export type TypeResolveCollider<Target extends Object<TypeSprite>> = (
  target: Target
) => void

export default interface InterfaceCollider {
  rectWithRect(
    object1: Object<TypeSprite>,
    object2: Object<TypeSprite>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithArc(
    object1: Object<TypeSprite>,
    object2: Object<TypeSprite>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithRect(
    object1: Object<TypeSprite>,
    object2: Object<TypeSprite>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
}
