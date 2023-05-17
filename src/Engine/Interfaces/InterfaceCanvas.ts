export default interface InterfaceCanvas {
  readonly screen: HTMLCanvasElement
  readonly context: RenderingContext
  resolution(width: number, height: number): this
  screenSize(width: number, height: number): this
  width(): number
  height(): number
}
