export default interface InterfaceCanvas {
  readonly screen: HTMLCanvasElement
  readonly context: RenderingContext
  screenSize(width: number, height: number): void
  width(): number
  height(): number
}
