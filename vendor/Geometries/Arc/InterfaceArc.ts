import Geometry from '@Vendor/Models/Geometry'

export default interface InterfaceArc extends Geometry {
  radius: number
  startAngle: number
  endAngle: number
  counterclockwise: boolean
}
