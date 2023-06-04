import Object from '@Vendor/Models/Object'
import TypeShape from '@Vendor/Types/TypeShape'

export default interface InterfaceMixDraw {
  objects: Object<TypeShape>[]

  add(object: Object<TypeShape>): void
  callUpdates(): void
}
