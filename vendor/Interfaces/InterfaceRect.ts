import InterfaceShape from '@Vendor/Interfaces/InterfaceShape'

export default interface InterfaceRect extends InterfaceShape {
  width: number
  height: number
  angle: number

  getHalfWidth(): number
  getHalfHeight(): number
  getCenterX(): number
  getCenterY(): number
  resize(width: number, height: number): this
}
