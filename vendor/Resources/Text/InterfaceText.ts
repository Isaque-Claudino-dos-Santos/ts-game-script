import Geometry from '@Vendor/Models/Geometry'

export default interface InterfaceText extends Geometry {
  text: string
  family: string
  size: string
  align: CanvasRenderingContext2D['textAlign']
  baseLine: CanvasRenderingContext2D['textBaseline']
  direction: CanvasRenderingContext2D['direction']
  maxWidth: number | undefined
}
