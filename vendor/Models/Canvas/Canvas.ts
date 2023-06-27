import InterfaceCanvas from './InterfaceCanvas'
import { TypeContextType } from './TypesCanvas'

export default abstract class Canvas<Context extends RenderingContext>
  implements InterfaceCanvas
{
  readonly screen: HTMLCanvasElement
  readonly context: Context
  screenWidth: number = 0
  screenHeight: number = 0

  constructor(contextType: TypeContextType) {
    this.screen = this.getElementCanvas()
    this.context = this.screen.getContext(contextType) as Context
    this.screenSize(300, 300)
  }

  private getElementCanvas(): HTMLCanvasElement {
    let canvas = document.querySelector('canvas') as HTMLCanvasElement
    if (canvas) return canvas
    const body = document.querySelector('body') as HTMLBodyElement
    canvas = document.createElement('canvas')
    body.appendChild(canvas)
    return canvas
  }

  public resolution(width: number, height: number): this {
    this.screen.width = width
    this.screen.height = height
    return this
  }

  public screenSize(width: number, height: number): this {
    this.screen.style.imageRendering = `pixelated`
    this.screenWidth = width
    this.screenHeight = height
    this.screen.style.width = `${width}px`
    this.screen.style.height = `${height}px`
    return this
  }

  public width(): number {
    return this.screen.width
  }

  public height(): number {
    return this.screen.height
  }
}