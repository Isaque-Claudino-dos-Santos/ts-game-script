export default interface InterfaceWindow {
  readonly screen: HTMLCanvasElement
  readonly context2d: CanvasRenderingContext2D

  width(): number
  height(): number
}
