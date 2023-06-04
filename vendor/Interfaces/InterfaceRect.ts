import InterfaceShape from '@Vendor/Interfaces/InterfaceShape'

export default interface InterfaceRect2d extends InterfaceShape {
  width: number
  height: number
  angle: number

  resize(width: number, height: number): this
}
