import InterfaceWindow from '@Interface/InterfaceWindow'

export default abstract class Window implements InterfaceWindow {
  abstract readonly screen: HTMLCanvasElement
  abstract readonly context2d: CanvasRenderingContext2D

  width(): number {
    return this.screen.width
  }

  height(): number {
    return this.screen.height
  }
}
