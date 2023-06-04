import Canvas from '@Engine/Modules/Canvas'

export default interface InterfaceMouse {
  canvas: Canvas<RenderingContext>
  x: number
  y: number
}
