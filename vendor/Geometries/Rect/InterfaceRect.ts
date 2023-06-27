import Geometry from '@Vendor/Models/Geometry'

export default interface InterfaceRect extends Geometry {
  width: number
  height: number
  angle: number

  getHalfWidth(): number
  getHalfHeight(): number
  getCenterX(): number
  getCenterY(): number
  resize(width: number, height: number): this
}
