import TypeResolveCollider from '@Vendor/Types/TypeResolveCollider'
import TypeShape from '@Vendor/Types/TypeShape'
import Object from '@Vendor/Models/Object'

export default interface InterfaceCollider {
  rectWithRect(
    object1: Object<TypeShape>,
    object2: Object<TypeShape>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithArc(
    object1: Object<TypeShape>,
    object2: Object<TypeShape>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
  arcWithRect(
    object1: Object<TypeShape>,
    object2: Object<TypeShape>,
    resolve: TypeResolveCollider<typeof object2>
  ): this
}
