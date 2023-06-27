import Geometry from '@Vendor/Models/Geometry'
import { TypeMixedGeomitry } from './TypesMixed'

export default interface InterfaceMixed extends Geometry {
  geomitries: TypeMixedGeomitry[]

  add(geomitry: TypeMixedGeomitry): void
}
