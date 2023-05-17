import InterfaceCanvas from '@Engine/Interfaces/InterfaceCanvas'

export type TypeContextType = '2d' | 'webgl' | 'webgl2' | 'bitmaprenderer'

export default abstract class Canvas<Context extends RenderingContext>
  implements InterfaceCanvas
{
  readonly screen: HTMLCanvasElement
  readonly context: Context

  constructor(contextType: TypeContextType) {
    this.screen = this.getElementCanvas()
    this.context = this.screen.getContext(contextType) as Context
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
