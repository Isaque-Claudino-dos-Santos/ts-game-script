import InterfaceCanvas2D from './InterfaceCanvas2D'

export default class Canvas2D implements InterfaceCanvas2D {
  readonly screen: HTMLCanvasElement
  readonly context: CanvasRenderingContext2D

  constructor() {
    try {
      this.screen = this.getCanvas()
      this.context = this.getContext2D(this.screen)
    } catch (error) {
      throw console.error(new Error(error as string))
    }
  }

  private getCanvas(): HTMLCanvasElement | never {
    const element = document.querySelector('#main')
    if (!element || !(element instanceof HTMLCanvasElement))
      throw 'Element to canvas not is HtmlCanvasElement or not content ID main.'
    return element
  }

  private getContext2D(
    canvasElement: HTMLCanvasElement
  ): CanvasRenderingContext2D | never {
    const context = canvasElement.getContext('2d')
    if (!context) throw 'Unexpected error with the getContext("2d")'
    return context
  }
}
