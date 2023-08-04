import AbstractGeometries2D from '../AbstractGeometries2D'

export default interface InterfaceRect extends AbstractGeometries2D {
  sizeWidth: number
  sizeHeight: number
  rotate: number

  width(): number
  width(sizeWidth: number): this

  height(): number
  height(sizeHeight: number): this

  angle(): number
  angle(rotate: number): this

  halfWidth(): number
  halfHeight(): number
  centerX(): number
  centerY(): number
}
