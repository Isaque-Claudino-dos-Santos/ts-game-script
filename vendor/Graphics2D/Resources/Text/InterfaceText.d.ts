import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'

export type UnitMeasurement = 'px' | '%' | 'em' | 'rem'

export default interface InterfaceText extends AbstractGeometries2D {
  textContent: string
  maxWidth: number | undefined
  fontSize: number
  fontFamily: string
  unitMeasurement: UnitMeasurement

  text(): string
  text(textContent: string): this

  size(): number
  size(fontSize: number, unitMeasurement: UnitMeasurement): this

  family(): string
  family(fontFamily: string): this

  limitWidth(): number | undefined
  limitWidth(maxWidth: number): this
}
