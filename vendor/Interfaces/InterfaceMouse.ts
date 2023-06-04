import Canvas from '@Vendor/Models/Canvas'

export default interface InterfaceMouse {
  canvas: Canvas<RenderingContext>
  x: number
  y: number
}
