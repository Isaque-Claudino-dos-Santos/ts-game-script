import Geometry from '@Vendor/Models/Geometry'
import Object from '@Vendor/Models/Object'

export default interface InterfaceMixed extends Geometry {
  objects: Object[]

  add(object: Object): void
  callUpdates(): void
}
