import Geometry from '@Vendor/Models/Geometry'

export default interface InterfaceSprite extends Geometry {
  image: HTMLImageElement
  sourceX: number
  sourceY: number
  sourceWidth: number
  sourceHeight: number
  width: number
  height: number

  resize(width: number, height: number): this
  setSourceImage(src: string): this
  moveSourceTo(x: number, y: number): this
  resizeSource(width: number, height: number): this
}
