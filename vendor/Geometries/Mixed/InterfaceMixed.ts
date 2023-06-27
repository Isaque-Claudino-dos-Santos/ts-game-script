import Geometry from '@Vendor/Models/Geometry'
import Object from '@Vendor/Models/Object'
import TypeShape from '@Vendor/Types/TypeShape'

export default interface InterfaceMixed extends Geometry {
  objects: Object<TypeShape>[]

  add(object: Object<TypeShape>): void
  callUpdates(): void
}
