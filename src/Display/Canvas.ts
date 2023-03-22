export default class Canvas {
  public readonly screen: HTMLCanvasElement;
  public readonly context: CanvasRenderingContext2D

  constructor(width: number = 300, height: number = 300) {
    this.screen = document.querySelector('canvas') ?? document.createElement('canvas')
    this.screen.width = width
    this.screen.height = height
    this.context = this.getCanvasContext2D(this.screen)
  }


  private getCanvasContext2D(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext('2d');
    if (!context) {
      throw console.error(
        new Error('Error in set Context: canvas element not valid or not defined')
      )
    }
    return context
  }
}