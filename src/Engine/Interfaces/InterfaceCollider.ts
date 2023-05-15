import Arc from '@Engine/Draw/Arc'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'

export type TypeResolveCollider<Target extends Object<TypeSprite>> = (
  target: Target
) => void

export default interface InterfaceCollider {
  rectWithRect(
    object1: Object<Rect>,
    object2: Object<Rect>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithArc(
    object1: Object<Arc>,
    object2: Object<Arc>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithRect(
    object1: Object<Arc>,
    object2: Object<Rect>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
}
